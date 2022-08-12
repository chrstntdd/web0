import { sep } from "node:path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

import { parcelCSSPlugin } from "@ct/vite-plugin-parcel-css"

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

					// Breaks in production builds :/
					// if (
					// 	name === "stylis" ||
					// 	name === "@emotion" ||
					// 	name ===
					// 		"@babel" /* @babel/runtime -- used in react-router-dom, too */ ||
					// 	name === "react-is" ||
					// 	name === "hoist-non-react-statics"
					// ) {
					// 	return "vend-emotion"
					// }

					// Defer to default behavior
				}
			},
		},
	},
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
			babel: {
				plugins: ["@emotion/babel-plugin"],
			},
		}),
		parcelCSSPlugin({
			browserslist: pkg.browserslist,
			minify: true,
		}),
	],
})
