import { Link, Outlet } from "react-router-dom"

export function AppLayout() {
	return (
		<div>
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">root</Link>
						</li>
						<li>
							<Link to="/scrollable">scrollable</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</div>
	)
}
