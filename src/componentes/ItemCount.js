import { useState } from "react";
import PropTypes from 'prop-types';

const ItemCount = ({stock = 5, onAdd}) => {
    const [contador, setContador] = useState(0);
    
    const agregar = () => {
        setContador(Math.min(stock, contador + 1));
    }

    const restar = () => {
        setContador(Math.max(0, contador - 1));
    }

    return (
        <div className="contenedor">
            <button className="btnAgregar" onClick={agregar}>+</button>
            <span>
                {contador}
            </span>
            <button className="btnRestar" onClick={restar}>-</button>
            <button className="btnAgregar" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

ItemCount.propTypes = {
    stock: PropTypes.number,
    onAdd: PropTypes.func
}

export default ItemCount;