import { globalStyle } from "@vanilla-extract/css"
import { theme } from "./vars.css"

globalStyle("html,body", {
	WebkitTextSizeAdjust: "100%",
	margin: 0,
	padding: 0,
})

globalStyle("body", {
	background: theme.color["p-6"],
	height: "100vh",
	minWidth: "100%",
	textRendering: "optimizeSpeed",
	lineHeight: 1.4,
	overflowX: "hidden",
	fontFamily: theme.fontFamily.body,
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
})
