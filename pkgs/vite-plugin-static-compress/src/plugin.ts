import type { Plugin } from "vite"
import {
	brotliCompressSync,
	constants,
	gzipSync,
	BrotliOptions,
	ZlibOptions,
} from "zlib"

type CompressionOptions = {
	/**
	 * @description
	 * Customize the options for brotli compression or opt out of emitting
	 */
	brotli?: BrotliOptions | false
	/**
	 * @description
	 * Customize the options for gzip compression or opt out of emitting
	 */
	gzip?: ZlibOptions | false
	/**
	 * @description
	 * Specify which files should be compressed.
	 *
	 * @default /.(html|css|js)$/
	 */
	match?: RegExp
}

/**
 * @description
 * Write text compressed assets to disk for production builds
 */
export function staticCompressionPlugin(opts?: CompressionOptions): Plugin {
	opts ??= {}
	let matcher = opts.match || /.(html|css|js)$/

	return {
		name: "vite-plugin-static-compress",
		apply: "build",
		enforce: "post",
		generateBundle(_, bundle) {
			for (let outputFileName in bundle) {
				let asset = bundle[outputFileName]
				if (asset && matcher.test(outputFileName)) {
					let rawSource = asset.type === "chunk" ? asset.code : asset.source
					let sourceBuffer = Buffer.from(rawSource)

					if (opts!.gzip !== false) {
						this.emitFile({
							type: "asset",
							fileName: outputFileName + ".gz",
							source: gzipSync(sourceBuffer, opts!.gzip ?? { level: 9 }),
						})
					}

					if (opts!.brotli !== false) {
						this.emitFile({
							type: "asset",
							fileName: outputFileName + ".br",
							source: brotliCompressSync(
								sourceBuffer,
								opts?.brotli ?? {
									params: {
										[constants.BROTLI_PARAM_MODE]: constants.BROTLI_MODE_TEXT,
										[constants.BROTLI_PARAM_QUALITY]: 11,
										[constants.BROTLI_PARAM_SIZE_HINT]: sourceBuffer.byteLength,
									},
								},
							),
						})
					}
				}
			}
		},
	}
}
