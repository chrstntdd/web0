import { Appearable } from "./lib/appearable"

import * as styles from "./list.css"
import type { CSSProperties } from "react"

export default function List() {
	return (
		<section className={styles.listContainer}>
			<h1 className={styles.listTitle}>A list view</h1>

			<ul className={styles.listList}>
				{new Array(21).fill(null).map((_, i) => {
					return (
						<Appearable
							as="li"
							key={i}
							style={{ "--appear-index": i } as CSSProperties}
							className={styles.appearableItem}
						>
							<article>
								Item <span className={styles.itemNum}>{i + 1}</span>
							</article>
						</Appearable>
					)
				})}
			</ul>
		</section>
	)
}
