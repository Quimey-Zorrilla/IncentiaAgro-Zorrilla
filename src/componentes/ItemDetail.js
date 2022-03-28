import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import Carrito from '../pages/Carrito';

export const ItemDetail = (props) => {

    //const [seleccionado, setSeleccionado] = useState(false)
    const [agregar, setAgregar] = useState(false)
    
    const { addItem} = useContext(CartContext)

    /*
    const onAdd = (unidadSeleccionada) => {
        if(unidadSeleccionada !== undefined){
            setSeleccionado(true)
        }
    }
    <p>{seleccionado?"Compra realizada!":"No selecciono cantidad"}</p>
    */
    const getCount = count => {
        addItem(props, count)
        setAgregar(true)
    }
    return (
        <div className="detalles">
            <img src={props.item.image} alt="imagen producto" />
            <div>
                <section key={props.item.id}>
                    <h1>{props.item.nombre}</h1>
                    <p>{props.item.descripcion}</p>
                    <h2>${props.item.precio}</h2>
                </section>
                <section>
                    {agregar?<button><Link onClick={addItem} to="/carrito/">Ir al carrito</Link></button> : <ItemCount initial={1} stock={5} onAdd={getCount}/> }
                </section>
                <Carrito key={props.item.id}/>
            </div>
        </div>
    );
};