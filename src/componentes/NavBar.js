import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <header>
            <h1><CartWidget/> INCENTIA</h1>
            <nav>
                <ul>
                    <li><a href="#">Organicos Certificados</a></li>
                    <li><a href="#">Fisiorresolutivos</a></li>
                    <li><a href="#">Nutrición de base</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;