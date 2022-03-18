import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const categorias = [
        { id: 'asfadd', address: '/', text: 'INCENTIA' },
        { id: '123asf', address: '/categoria/A', text: 'Organicos Certificados' },
        { id: 'sgs3q3', address: '/categoria/B', text: 'Fisiorresolutivos' },
        { id: 'gkl98s', address: '/categoria/C', text: 'Nutrición de base' },
    ];

    return (
        <header>
            {categorias.map((cat) => {
                return (
                    <nav key={cat.id}>
                        <NavLink
                        to={cat.address} className={({ isActive }) => (isActive ? 'activeClass' : '')}
                        >
                        {cat.text}
                        </NavLink>
                    </nav>
                );
            })}
        </header>
    );
};