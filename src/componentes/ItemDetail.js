import React from 'react';

export const ItemDetail = ({
    id,
    nombre,
    categoria,
    image,
    descripcion,
    precio,
}) => {
    return (
        <div className="detail-row">
        <img src={image} alt={`${id}-${nombre}`} className="flex-col" />
        <section className="flex-col">
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <h2>${precio}</h2>
        </section>
        </div>
    );
};