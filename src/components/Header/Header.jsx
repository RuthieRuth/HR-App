import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>
                <NavLink to="/">LOGO</NavLink>
            </h2>

            <nav>
                <ul>
                    <li><NavLink to="/list">Employees</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;