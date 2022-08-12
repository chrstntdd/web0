import { sep } from "node:path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

import { parcelCSSPlugin } from "@ct/vite-plugin-parcel-css"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

import pkg from "./package.json"

const SHARED_SERVER = {
	port: 3000,
}

// https://vitejs.dev/config/

export default defineConfig({
	server: SHARED_SERVER,
	preview: SHARED_SERVER,
	build: {
		rollupOptions: {
			manualChunks(id, x) {
				if (!id.endsWith(".css") && id.includes("node_modules")) {
					let directories = id.split(sep)
					let name = directories[directories.lastIndexOf("node_modules") + 1]

					if (
						name === "react" ||
						name === "react-dom" ||
						name === "scheduler"
					) {
						return "vend-react"
					}

					// Defer to default behavior
				}
			},
		},
	},
	plugins: [
		react(),
		vanillaExtractPlugin(),
		parcelCSSPlugin({
			browserslist: pkg.browserslist,
			minify: true,
		}),
	],
})
