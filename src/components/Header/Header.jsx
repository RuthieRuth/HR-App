import { NavLink } from "react-router-dom";
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-section">
                <h2>
                    <NavLink to="/">LOGO</NavLink>
                </h2>
            </div>
            <div className="nav-section">
            <nav>
                <ul>
                    <li><NavLink to="/list">View Employees</NavLink></li>
                    <li><NavLink to="/form">Add new employees </NavLink></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}

export default Header;