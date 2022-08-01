import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		includeSource: ["src/**/*.ts"],
		coverage: {
			all: true,
			include: ["src"],
			reporter: ["lcov"],
		},
	},
})
