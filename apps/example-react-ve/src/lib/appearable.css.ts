import { style } from "@vanilla-extract/css"

export const appearWrapper = style({
	transition: "all 200ms ease-in-out",
	opacity: 0,
	transform: `translateY(16px) scale(0.95)`,
	selectors: {
		'&[data-appeared="true"]': {
			opacity: 1,
			transform: "translateY(0px) scale(1)",
		},
	},
})
