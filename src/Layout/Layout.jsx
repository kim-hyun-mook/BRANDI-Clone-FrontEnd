import { Outlet } from "react-router-dom"
import Header from "@components/ui/Header/Header"
import BottomNav from "../components/BottomNav/BottomNav"


const Layout = () => {
	return (
		<div>
			<Header />
			<BottomNav/>
			<Outlet/>
		</div>
	)
}

export default Layout