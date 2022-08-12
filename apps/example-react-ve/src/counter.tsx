import { CSSProperties, ReactNode, useState } from "react"

import logo from "./logo.svg"

import * as styles from "./counter.css"

export default function Counter() {
	const [count, setCount] = useState(2)

	return (
		<div className={styles.counterContainer}>
			<header className={styles.header}>
				<img alt="logo" src={logo} className={styles.logo} />
				<p>Hello Vite + React!</p>

				<div
					className={styles.buttonContainer}
					style={
						{
							"--count": count,
						} as CSSProperties
					}
				>
					<button
						className={styles.button}
						type="button"
						onClick={() => setCount((count) => count - 1)}
					>
						<Emoji label="minus 1">➖</Emoji>
					</button>
					<button
						className={styles.button}
						type="button"
						onClick={() => setCount((count) => count + 1)}
					>
						<Emoji label="plus 1">➕</Emoji>
					</button>
				</div>

				<output>count is: {count}</output>
			</header>
		</div>
	)
}

function Emoji({ children, label }: { label: string; children: ReactNode }) {
	return (
		<span role="img" aria-label={label} className={styles.emoji}>
			{children}
		</span>
	)
}
