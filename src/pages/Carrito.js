import { CartContext } from '../componentes/CartContext';
import React, { useContext } from 'react';

function Carrito() {
    const { clear, cart, removeItem } = useContext(CartContext)

    return(
        <div>
            <button onClick={clear}>Limpiar Carrito</button>
            {cart.map(item => {
                return(
                    <div key={item.producto.id}>
                        <h2>{item.producto.nombre}</h2>
                        <img src={item.producto.image} alt={`${item.id}-${item.nombre}`} />
                        <h3>${item.producto.precio}</h3>
                        <button onClick={() => removeItem(item.producto)}>Eliminar</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Carrito;