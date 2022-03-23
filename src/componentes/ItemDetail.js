import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import {useState} from "react";
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export const ItemDetail = (producto) => {
    const [seleccionado, setSeleccionado] = useState(false)
    const [agregar, setAgregar] = useState(false)

    const { removeItem } = useContext(CartContext)
    //const getCount = cantidad => {
        //addItem(producto, cantidad)
    //}

    const onAdd = (unidadSeleccionada) => {
        if(unidadSeleccionada !== undefined){
            setSeleccionado(true)
        }
        setAgregar(true)
    }
    return (
        <div className="detalles">
            <img src={producto.image} alt={`${producto.id}-${producto.nombre}`} />
            <div>
                <section key={producto.id}>
                    <h1>{producto.nombre}</h1>
                    <p>{producto.descripcion}</p>
                    <h2>${producto.precio}</h2>
                </section>
                <section>
                    <p>{seleccionado?"Compra realizada!":"No selecciono cantidad"}</p>
                    {agregar?<button><Link to="/carrito/">Ir al carrito</Link></button> : <ItemCount initial={1} stock={5} onAdd={onAdd}/> }
                </section>
                <button onClick={() => removeItem(producto)}>Eliminar del Carrito</button>
            </div>
        </div>
    );
};