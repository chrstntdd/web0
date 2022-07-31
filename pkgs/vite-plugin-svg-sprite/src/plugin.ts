import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"
import { resolve, basename, dirname } from "node:path"

import { optimize as svgoptimize } from "svgo"
import type { Plugin } from "vite"
import type { OptimizeOptions } from "svgo"

const SVG_EXTENSION = ".svg"

const transformToSymbolPlugin = {
	type: "visitor",
	name: "to-symbol",
	// @ts-expect-error Third party types :/
	fn(_, __, info) {
		return {
			element: {
				// @ts-expect-error Third party types :/
				enter(node, _parentNode) {
					if (node.type === "element" && node.name === "svg") {
						delete node.attributes["xmlns"]
						delete node.attributes["xmlns:xlink"]

						node.name = "symbol"
						node.type = "element"

						node.attributes.id = info.path.replace(SVG_EXTENSION, "")
					}
				},
			},
		}
	},
}

async function makeSVGSprite(
	targetDir: string,
	dirList: string[],
	optimize: Opts["optimize"] = {},
) {
	let svgList = dirList.map((fileName) => resolve(targetDir, fileName))

	let contents = await Promise.all(
		svgList.map(async (pathTo) => ({
			content: await readFile(pathTo, "utf-8"),
			name: basename(pathTo),
		})),
	)

	let optimizedSVGSymbols = ""

	// @ts-expect-error Third party types :/
	optimize.plugins?.push(transformToSymbolPlugin)

	for (let index = 0; index < contents.length; index++) {
		let element = contents[index]!

		optimize.path = element.name

		let optimizedContent = svgoptimize(element.content, optimize)

		if (optimizedContent.error || !("data" in optimizedContent)) {
			throw optimizedContent.modernError
		}

		optimizedSVGSymbols += optimizedContent.data
	}

	return `<svg xmlns='http://www.w3.org/2000/svg' height=0 width=0>${optimizedSVGSymbols}</svg>`
}

async function makeSVGIconTypes(dirList: string[], pathToWrite: string) {
	let svgList = dirList.map((n) => basename(n, SVG_EXTENSION))

	await mkdir(dirname(pathToWrite), { recursive: true })

	await writeFile(
		pathToWrite,
		`/* 🪴 AUTO GENERATED — EDIT WITH CARE 🧘🏼 */

export type IconName = 
  ${svgList.map((n) => `| "${n}"`).join("\n  ")}
`,
	)
}

interface Opts {
	/**
	 * @description Directory containing your SVG icons
	 *
	 * Should not contain nested directories — keep it flat
	 */
	targetDir: string
	/** @description Replacement search value  eg: `<!-- SVG_LOOKUP -->` in your index.html */
	replaceComment: string
	/** @description Path to write the type definition to  */
	typeDefPath: string
	/**
	 * @description Options to pass to `svgo` to optimize the inlined SVGs.
	 */
	optimize?: OptimizeOptions
}

export function svgSpritePlugin({
	replaceComment,
	targetDir,
	typeDefPath,
	optimize,
}: Opts): Plugin {
	return {
		name: "vite-svg-sprite-plugin",
		enforce: "post",
		async handleHotUpdate({ file, server }) {
			if (file.endsWith(SVG_EXTENSION)) {
				server.ws.send({ type: "full-reload", path: "*" })
			}
		},
		async transformIndexHtml(html) {
			let dirList = await readdir(targetDir)

			let [spriteSheet] = await Promise.all([
				makeSVGSprite(targetDir, dirList, optimize),
				makeSVGIconTypes(dirList, typeDefPath),
			])

			return html.replace(replaceComment, spriteSheet)
		},
	}
}
