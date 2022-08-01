/**
 * @description
 * A simple queue using a Map instead of an Array as the backing data structure
 */
export class Q<T> {
	#list = new Map<number, T>()

	#headPosition = 0

	nq(item: T) {
		this.#list.set(this.length, item)
	}
	dq() {
		if (this.length === 0) return undefined

		let item = this.#list.get(this.#headPosition)
		this.#list.delete(this.#headPosition)
		this.#headPosition++
		return item
	}

	get length() {
		return this.#list.size
	}

	get list() {
		return this.#list.values()
	}
}

if (import.meta.vitest) {
	let { test, expect } = import.meta.vitest

	test("should support enqueuing (nq) items", () => {
		let q = new Q()
		let firstItem = { type: "ITEM_A" },
			lastItem = { type: "ITEM_B" }
		q.nq(firstItem)
		q.nq(lastItem)

		expect(q.length).toEqual(2)

		let underlyingList = [...q.list]

		expect(underlyingList.at(0)).toEqual(firstItem)
		expect(underlyingList.at(1)).toEqual(lastItem)
		expect(underlyingList.at(2)).toBeUndefined()
	})

	test("should support dequeuing (dq) items", () => {
		let q = new Q()
		let firstItem = { type: "ITEM_A" },
			lastItem = { type: "ITEM_B" }
		q.nq(firstItem)
		q.nq(lastItem)

		expect(q.length).toEqual(2)

		expect(q.dq()).toEqual(firstItem)
		expect(q.dq()).toEqual(lastItem)
		expect(q.dq()).toBeUndefined()
	})

	test("should support iterating through the values", () => {
		let q = new Q()
		let firstItem = { type: "ITEM_A" },
			lastItem = { type: "ITEM_B" }
		q.nq(firstItem)
		q.nq(lastItem)

		for (const item of q.list) {
			expect(item).toBeDefined()
		}

		expect([...q.list]).toMatchInlineSnapshot(`
			[
			  {
			    "type": "ITEM_A",
			  },
			  {
			    "type": "ITEM_B",
			  },
			]
		`)
	})
}
