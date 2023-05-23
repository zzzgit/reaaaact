import {Outlet, Route, Routes} from 'react-router-dom'
import {Home} from './page/Home'
import {About} from './page/About'
import {Contact} from './page/Contact'
import {NotFound} from './page/NotFound'
import NavBar from './component/NavBar'

/**
 * sksk
 * @return {React.FunctionComponent} reut
 *
 */
function App() :JSX.Element {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/*" element={<NotFound />} />
				</Route>
			</Routes>
		</>

	)
}
export default App


const Layout = (): JSX.Element => {
	return (
		<div>
			<Outlet />
		</div>
	)
}
