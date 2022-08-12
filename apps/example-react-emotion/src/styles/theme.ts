import { modularScale } from "polished"

const createScale = (ratio: number, base: number) => (steps: number) =>
	`${modularScale(steps, base, ratio)}px`

const spaceScale = createScale(1.4, 4)
const fontSizeScale = createScale(1.3, 16)
const lineHeightScale = createScale(1.25, 24)
const borderRadiusScale = createScale(1.5, 4)

export const theme = {
	space: {
		none: "0",
		"0x": spaceScale(0),
		"1x": spaceScale(1),
		"2x": spaceScale(2),
		"3x": spaceScale(3),
		"4x": spaceScale(4),
		"5x": spaceScale(5),
		"6x": spaceScale(6),
		"7x": spaceScale(7),
		"8x": spaceScale(8),
	},
	color: {
		"p-0": "#e4e7f3",
		"p-1": "#c5cbe6",
		"p-2": "#a6b0d8",
		"p-3": "#8696ca",
		"p-4": "#657cbc",
		"p-5": "#4d65a3",
		"p-6": "#3e507f",
		"p-7": "#303c5d",
		"p-8": "#22283d",
		"p-9": "#14171f",
	},
	borderRadius: {
		"0x": borderRadiusScale(0),
		"1x": borderRadiusScale(1),
		"2x": borderRadiusScale(2),
		"3x": borderRadiusScale(3),
		"4x": borderRadiusScale(4),
		"5x": borderRadiusScale(5),
		full: "99999px",
	},
	fontFamily: {
		body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	},
	fontSize: {
		"0x": fontSizeScale(0),
		"1x": fontSizeScale(1),
		"2x": fontSizeScale(2),
		"3x": fontSizeScale(3),
		"4x": fontSizeScale(4),
		"5x": fontSizeScale(5),
	},
	lineHeight: {
		"0x": lineHeightScale(0),
		"1x": lineHeightScale(1),
		"2x": lineHeightScale(2),
		"3x": lineHeightScale(3),
		"4x": lineHeightScale(4),
		"5x": lineHeightScale(5),
	},
} as const
