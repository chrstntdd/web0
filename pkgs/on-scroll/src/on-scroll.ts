type Listener = (v: number) => void
type Teardown = (removeGlobal?: boolean) => void

let listeners = new Map<number, Listener>([])

let getScroll = () => scrollY

let scrollRunner = () => {
	let v = getScroll()

	for (let listener of listeners) {
		listener[1](v)
	}
}

export function onScroll(listener: Listener, immediate?: boolean): Teardown {
	let id = listeners.size
	let opts: Parameters<typeof addEventListener | typeof removeEventListener>[2]

	if (!listeners.has(id)) {
		listeners.set(id, listener)

		if (immediate) {
			listener(getScroll())
		}

		if (id === 0) {
			opts = { passive: true, capture: false }

			addEventListener("scroll", scrollRunner, opts)
		}
	}

	return (removeGlobal) => {
		listeners.delete(id)
		if (removeGlobal) {
			removeEventListener("scroll", scrollRunner, opts)
		}
	}
}
