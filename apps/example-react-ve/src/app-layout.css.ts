import { style } from "@vanilla-extract/css"
import { theme } from "./styles/vars.css"

export const navList = style({
	margin: 0,
	padding: 0,
	listStyle: "none",
	display: "flex",
	justifyContent: "center",
	gap: theme.space["2x"],
})

export const link = style({
	color: theme.color["p-0"],
	fontSize: theme.fontSize["2x"],
	textDecoration: "none",
	selectors: {
		'&[aria-current="page"]': {
			textDecoration: "underline",
		},
	},
})
