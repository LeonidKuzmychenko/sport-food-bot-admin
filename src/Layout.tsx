import { Link, Outlet } from "react-router-dom";

import "./Layout.css"
function Layout() {
    return (
        <div className="mainPage">
            <header className="header">
                <nav className={"navigation"}>
                    <Link to="/">Page1</Link>
                    <Link to="/page2">Page2</Link>
                    <Link to="/page3">Page3</Link>
                </nav>
            </header>

            <main className="main">
                <Outlet /> {/* сюда подставляется текущая страница */}
            </main>

            <footer className="footer">Footer</footer>
        </div>
    );
}

export default Layout
