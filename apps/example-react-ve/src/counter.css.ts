import { style, keyframes } from "@vanilla-extract/css"

import { theme } from "./styles/vars.css"

export const counterContainer = style({
	textAlign: "center",
})

export const header = style({
	alignItems: "center",
	color: "white",
	display: "flex",
	flexDirection: "column",
	fontSize: "calc(10px + 2vmin)",
	justifyContent: "center",
	paddingBlockStart: theme.space["6x"],
	gap: theme.space["1x"],
})

const spinKeyFrames = keyframes({
	from: {
		transform: "rotate(0deg)",
	},
	to: {
		transform: "rotate(360deg)",
	},
})

export const logo = style({
	height: "40vmin",
	pointerEvents: "none",
	"@media": {
		"(prefers-reduced-motion: no-preference)": {
			animation: `${spinKeyFrames} infinite 20s linear`,
		},
	},
})

export const buttonContainer = style({
	display: "flex",
	gap: theme.space["2x"],
})

export const button = style({
	padding: theme.space["2x"],
	borderRadius: theme.borderRadius["0x"],
	border: "none",
	margin: 0,
	display: "grid",
	placeItems: "center",
	aspectRatio: "1/1",
	fontSize: `calc(10px + calc(var(--count) * 1vmin))`,
})

export const emoji = style({
	touchAction: "none",
	pointerEvents: "none",
	height: "100%",
	width: "100%",
})
