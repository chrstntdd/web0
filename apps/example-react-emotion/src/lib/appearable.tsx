import { jsx } from "@emotion/react"
import { useEffect, useState, useRef } from "react"

type AsProp = keyof HTMLElementTagNameMap

type Props = {
	as: AsProp
} & React.HTMLProps<HTMLElementTagNameMap[AsProp]>

export function Appearable({ as = "div", ...passThruProps }: Props) {
	let [ref, appeared] = useAppear()

	return jsx(as, {
		ref,
		css: {
			transition: "all 200ms ease-in-out",
			opacity: appeared ? 1 : 0,
			transform: appeared
				? `translateY(0px) scale(1)`
				: `translateY(16px) scale(0.95)`,
		},
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
