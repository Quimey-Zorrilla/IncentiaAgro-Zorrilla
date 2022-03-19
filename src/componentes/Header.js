import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

function Header() {
    return(
        <header>
            <Link to="/">
                <h1><CartWidget/> INCENTIA</h1>
            </Link>
            <NavBar/>
        </header>
    );
}

export default Header;