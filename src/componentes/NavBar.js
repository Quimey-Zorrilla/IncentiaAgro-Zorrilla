import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to="/categoria/A">Organicos</NavLink></li>
                    <li><NavLink to="/categoria/B">Fisiorresolutivos</NavLink></li>
                    <li><NavLink to="/categoria/C">Nutrición de base</NavLink></li>
                    <li><NavLink to="/carrito">Carrito</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;