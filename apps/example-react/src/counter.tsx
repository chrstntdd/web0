import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { SVGIcon } from "./components/svg-icon"

export default function Counter() {
	const [count, setCount] = useState(0)

	let buttonStyles = {
		padding: "1.2rem",
		display: "flex",
		justifyContent: "center",
		alginItems: "center",
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello Vite + React!</p>

				<button
					style={buttonStyles}
					type="button"
					onClick={() => setCount((count) => count + 1)}
				>
					<SVGIcon iconName="radix-icons:plus" />
				</button>
				<button
					style={buttonStyles}
					type="button"
					onClick={() => setCount((count) => count - 1)}
				>
					<SVGIcon iconName="radix-icons:minus" />
				</button>

				<output>count is: {count}</output>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
			</header>
		</div>
	)
}
