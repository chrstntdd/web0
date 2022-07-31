import { forwardRef, memo, SVGProps } from "react"

import type { IconName } from "./@types/icon-names"

import styles from "./svg-icon.module.css"

interface Props extends SVGProps<SVGSVGElement> {
	iconName: IconName
}

export const SVGIcon = memo(
	forwardRef<SVGSVGElement, Props>(function SVGIcon(props, theirRef) {
		let { iconName, ...passThru } = props

		return (
			<div style={{ height: 20, width: 20 }}>
				<svg
					ref={theirRef}
					aria-hidden
					{...passThru}
					className={styles.svgIcon}
				>
					<use
						href={"#" + iconName}
						fill="currentColor"
						stroke="currentColor"
					/>
				</svg>
			</div>
		)
	}),
)
