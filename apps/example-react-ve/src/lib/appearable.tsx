import { createElement } from "react"
import { useEffect, useState, useRef } from "react"

import * as styles from "./appearable.css"

type AsProp = keyof HTMLElementTagNameMap

type Props = {
	as: AsProp
} & React.HTMLProps<HTMLElementTagNameMap[AsProp]>

export function Appearable({
	as = "div",
	className = "",
	...passThruProps
}: Props) {
	let [ref, appeared] = useAppear()

	return createElement(as, {
		ref,
		["data-appeared"]: appeared,
		className: `${className} ${styles.appearWrapper}`,
		...passThruProps,
	})
}

function useAppear<RefKind extends HTMLElement>(onAppear?: () => void) {
	let targetRef = useRef<RefKind | null>(null)
	let [appeared, setAppeared] = useState(false)

	useEffect(() => {
		let io = new IntersectionObserver(([entry], self) => {
			if (entry!.isIntersecting) {
				self.disconnect()
				setAppeared(true)
				onAppear?.()
			}
		})

		if (targetRef.current) {
			io.observe(targetRef.current)
		}

		return () => {
			io.disconnect()
		}
	})

	return [targetRef, appeared] as const
}
