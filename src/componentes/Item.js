import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, nombre, categoria, image, precio }) => {
    return(
        <>
            <article className={`item_card ${categoria}-categoria`}>
                <h2>{nombre}</h2>
                <img src={image} alt={nombre}/>
                <p>${precio}</p>
                <button>
                    <Link to={`/producto/${id}`}>Mas detalles</Link>
                </button>
            </article>
        </>
    );
};