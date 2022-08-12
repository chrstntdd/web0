import { css, keyframes } from "@emotion/react"
import { ReactNode, useState } from "react"

import logo from "./logo.svg"
import { theme } from "./styles/theme"

let kf = keyframes`
from {
	transform: rotate(0deg);
},
to {
	transform: rotate(360deg);
},
`

export default function Counter() {
	const [count, setCount] = useState(2)

	let buttonStyles = css({
		padding: theme.space["2x"],
		borderRadius: theme.borderRadius["0x"],
		border: "none",
		margin: 0,
		display: "grid",
		placeItems: "center",
		aspectRatio: "1/1",
		fontSize: `calc(10px + ${count}vmin)`,
	})

	return (
		<div css={{ textAlign: "center" }}>
			<header
				css={{
					alignItems: "center",
					color: "white",
					display: "flex",
					flexDirection: "column",
					fontSize: "calc(10px + 2vmin)",
					justifyContent: "center",
					paddingBlockStart: theme.space["6x"],
					gap: theme.space["1x"],
				}}
			>
				<img
					alt="logo"
					src={logo}
					css={{
						height: "40vmin",
						pointerEvents: "none",
						"@media (prefers-reduced-motion: no-preference)": {
							animation: `${kf} infinite 20s linear`,
						},
					}}
				/>
				<p>Hello Vite + React!</p>

				<div
					css={{
						display: "flex",
						gap: theme.space["2x"],
					}}
				>
					<button
						css={buttonStyles}
						type="button"
						onClick={() => setCount((count) => count - 1)}
					>
						<Emoji label="minus 1">➖</Emoji>
					</button>
					<button
						css={buttonStyles}
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
		<span
			role="img"
			aria-label={label}
			css={{
				touchAction: "none",
				pointerEvents: "none",
				height: "100%",
				width: "100%",
			}}
		>
			{children}
		</span>
	)
}
