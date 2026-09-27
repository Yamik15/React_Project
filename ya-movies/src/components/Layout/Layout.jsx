import { Outlet } from "react-router-dom";
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import './Layout.css'

export default function Layout() {
    return (
        <div className="layout">
            <Header></Header>
            <main className="layout__main">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}