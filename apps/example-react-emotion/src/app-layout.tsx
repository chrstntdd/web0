import { css } from "@emotion/react"
import { NavLink, Outlet } from "react-router-dom"
import { theme } from "./styles/theme"

export function AppLayout() {
	let linkStyle = css({
		color: theme.color["p-0"],
		fontSize: theme.fontSize["2x"],
		textDecoration: "none",
		'&[aria-current="page"]': {
			textDecoration: "underline",
		},
	})
	return (
		<div>
			<header>
				<nav>
					<ul
						css={{
							margin: 0,
							padding: 0,
							listStyle: "none",
							display: "flex",
							justifyContent: "center",
							gap: theme.space["2x"],
						}}
					>
						<li>
							<NavLink css={linkStyle} to="/">
								root
							</NavLink>
						</li>
						<li>
							<NavLink css={linkStyle} to="/list">
								list
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</div>
	)
}
