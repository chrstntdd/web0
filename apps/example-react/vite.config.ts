import { resolve } from "node:path"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

import { svgSpritePlugin } from "@ct/vite-plugin-svg-sprite"
import { parcelCSSPlugin } from "@ct/vite-plugin-parcel-css"

const SHARED_SERVER = {
	port: 3000,
}

// https://vitejs.dev/config/
export default defineConfig({
	server: SHARED_SERVER,
	preview: SHARED_SERVER,
	plugins: [
		react(),
		svgSpritePlugin({
			replaceComment: "<!-- SPRITE_SHEET -->",
			targetDir: resolve("src", "assets", "svg"),
			typeDefPath: resolve("src", "@types", "icon-names.d.ts"),
			optimize: {
				/* From https://github.com/jakearchibald/svgomg/blob/main/src/config.json */
				plugins: [
					{
						name: "removeDoctype",
						active: true,
					},
					{
						name: "removeXMLProcInst",
						active: true,
					},
					{
						name: "removeComments",
						active: true,
					},
					{
						name: "removeMetadata",
						active: true,
					},
					{
						name: "removeXMLNS",
						active: false,
					},
					{
						name: "removeEditorsNSData",
						active: true,
					},
					{
						name: "cleanupAttrs",
						active: true,
					},
					{
						name: "mergeStyles",
						active: true,
					},
					{
						name: "inlineStyles",
						active: true,
					},
					{
						name: "minifyStyles",
						active: true,
					},
					{
						name: "convertStyleToAttrs",
						active: false,
					},
					{
						name: "cleanupIDs",
						active: true,
					},
					{
						name: "removeRasterImages",
						active: false,
					},
					{
						name: "removeUselessDefs",
						active: true,
					},
					{
						name: "cleanupNumericValues",
						active: true,
					},
					{
						name: "cleanupListOfValues",
						active: false,
					},
					{
						name: "convertColors",
						active: true,
					},
					{
						name: "removeUnknownsAndDefaults",
						active: true,
					},
					{
						name: "removeNonInheritableGroupAttrs",
						active: true,
					},
					{
						name: "removeUselessStrokeAndFill",
						active: true,
					},
					{
						name: "removeViewBox",
						active: false,
					},
					{
						name: "cleanupEnableBackground",
						active: true,
					},
					{
						name: "removeHiddenElems",
						active: true,
					},
					{
						name: "removeEmptyText",
						active: true,
					},
					{
						name: "convertShapeToPath",
						active: true,
					},
					{
						name: "moveElemsAttrsToGroup",
						active: true,
					},
					{
						name: "moveGroupAttrsToElems",
						active: true,
					},
					{
						name: "collapseGroups",
						active: true,
					},
					{
						name: "convertPathData",
						active: true,
					},
					{
						name: "convertEllipseToCircle",
						active: true,
					},
					{
						name: "convertTransform",
						active: true,
					},
					{
						name: "removeEmptyAttrs",
						active: true,
					},
					{
						name: "removeEmptyContainers",
						active: true,
					},
					{
						name: "mergePaths",
						active: true,
					},
					{
						name: "removeUnusedNS",
						active: true,
					},
					{
						name: "reusePaths",
						active: false,
					},
					{
						name: "sortAttrs",
						active: false,
					},
					{
						name: "sortDefsChildren",
						active: true,
					},
					{
						name: "removeTitle",
						active: true,
					},
					{
						name: "removeDesc",
						active: true,
					},
					{
						name: "removeDimensions",
						active: true,
					},
					{
						name: "removeStyleElement",
						active: false,
					},
					{
						name: "removeScriptElement",
						active: false,
					},
				],
			},
		}),
		parcelCSSPlugin({
			// Intentionally legacy to verify @parcel/css' syntax lowering
			browserslist: ["IE 11", "safari 13"],
			minify: true,
		}),
	],
})
