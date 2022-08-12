import { style } from "@vanilla-extract/css"
import { theme } from "./styles/vars.css"

export const listContainer = style({
	paddingInline: theme.space["3x"],
})

export const listTitle = style({
	fontSize: theme.fontSize["4x"],
	color: theme.color["p-0"],
})

export const listList = style({
	paddingInline: 0,
	paddingBlock: theme.space["4x"],
	listStyle: "none",
	display: "flex",
	gap: theme.space["3x"],
	flexDirection: "column",
})

export const itemNum = style({
	color: theme.color["p-1"],
})

export const appearableItem = style({
	borderRadius: theme.borderRadius["0x"],
	background: theme.color["p-3"],
	fontSize: theme.fontSize["4x"],
	paddingBlock: theme.space["3x"],
	paddingInline: theme.space["5x"],
	transitionDelay: `clamp(0.01s, calc(0.025s * var(--appear-index)), 1s)`,
})
