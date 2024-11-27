import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import './roots.css'

const Root = () => {
    return (
        <div className="root-container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Root;
