import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, nombre, categoria, image, precio }) => {
    return(
        <Link to={`/producto/${id}`}>
        <div className={`item_card ${categoria}-categoria`}>
            <h2>{nombre}</h2>
            <p>Cat: {categoria}</p>
            <span>
                <img src={image} alt={nombre} className={'small-img'}/>
            </span>
            <h3>${precio}</h3>
        </div>
        </Link>
    );
};