import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <NavLink to="/" className="nav-link">
                    Page1
                </NavLink>
                <NavLink to="/page2" className="nav-link">
                    Page2
                </NavLink>
                <NavLink to="/page3" className="nav-link">
                    Page3
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
