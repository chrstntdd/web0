import { ReactNode, useEffect } from "react"
import { onScroll } from "@ct/on-scroll"

export default function Scrollable() {
	return (
		<section>
			<ul>
				{Array.from({ length: 100 }).map((_, i) => {
					return <Item key={i}>{i + 1}</Item>
				})}
			</ul>
		</section>
	)
}

function Item({ children }: { children: ReactNode }) {
	useEffect(() => onScroll(console.log), [])
	// useInefficientScroll()
	return <li>{children}</li>
}

function useInefficientScroll() {
	useEffect(() => {
		function handler(...args) {
			console.log(...args)
		}
		let opts = { capture: true, passive: true }
		addEventListener("scroll", handler, opts)
		return () => {
			removeEventListener("scroll", handler, opts)
		}
	}, [])
}
