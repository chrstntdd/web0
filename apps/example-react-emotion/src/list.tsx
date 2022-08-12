import { Appearable } from "./lib/appearable"
import { theme } from "./styles/theme"

export default function List() {
	return (
		<section
			css={{
				paddingInline: theme.space["3x"],
			}}
		>
			<h1 css={{ fontSize: theme.fontSize["4x"], color: theme.color["p-0"] }}>
				A list view
			</h1>

			<ul
				css={{
					paddingInline: 0,
					paddingBlock: theme.space["4x"],
					listStyle: "none",
					display: "flex",
					gap: theme.space["3x"],
					flexDirection: "column",
				}}
			>
				{new Array(21).fill(null).map((_, i) => {
					return (
						<Appearable
							as="li"
							key={i}
							css={{
								borderRadius: theme.borderRadius["0x"],
								background: theme.color["p-3"],
								fontSize: theme.fontSize["4x"],
								paddingBlock: theme.space["3x"],
								paddingInline: theme.space["5x"],
								transitionDelay: `clamp(0.01s, ${0.025 * i}s, 1s)`,
							}}
						>
							<article>
								Item <span css={{ color: theme.color["p-1"] }}>{i + 1}</span>
							</article>
						</Appearable>
					)
				})}
			</ul>
		</section>
	)
}
