import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppLayout } from "./app-layout"

const Counter = lazy(() => import("./counter"))
const Scrollable = lazy(() => import("./scrollable"))

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Suspense fallback="loading...">
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<Counter />} />
						<Route path="/scrollable" element={<Scrollable />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
