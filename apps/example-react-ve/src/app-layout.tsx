import { NavLink, Outlet } from "react-router-dom"

import * as styles from "./app-layout.css"

export function AppLayout() {
	return (
		<>
			<header>
				<nav>
					<ul className={styles.navList}>
						<li>
							<NavLink className={styles.link} to="/">
								root
							</NavLink>
						</li>
						<li>
							<NavLink className={styles.link} to="/list">
								list
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</>
	)
}
