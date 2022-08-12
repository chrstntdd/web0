import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AppLayout } from "./app-layout"

const Counter = lazy(() => import("./counter"))
const List = lazy(() => import("./list"))

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Suspense fallback={null}>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Counter />} />
						<Route path="/list" element={<List />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
