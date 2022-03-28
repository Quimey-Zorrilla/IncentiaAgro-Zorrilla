import { useState } from "react";

const ItemCount = ({stock,initial,onAdd}) => {
    const [contador, setContador] = useState(initial)

    const aumentar = (e) => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }
    
    const disminuir = (e) => {
        if(contador > initial) {
            setContador(contador - 1)
        }
    }

    const confirmar = (e) => {
        onAdd(contador)
    }

    return(
        <div>
            <p>Cantidad actual: {contador}</p>
            <button onClick={aumentar}> + </button>
            <button onClick={disminuir}> - </button>
            <button onClick={confirmar}> Confirmar compra </button>
        </div>
    );
}

export default ItemCount;