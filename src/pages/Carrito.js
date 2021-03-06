import { useContext } from "react";
import { CartContext } from "../componentes/CartContext";

const Carrito = () => {
    const {cart, removeItem, clear, totalPrice, totalProducts } = useContext(CartContext)

    return(
        <>
            <h2>MI CARRITO!</h2>
            {
                cart.map(item => {
                    return(
                        <div key={item.product.item.id}>
                            <h3>{item.product.item.nombre}</h3>
                            <img src={item.product.item.image} alt="imagen producto" />
                            <h4>${item.product.item.precio}</h4>
                            <p>{item.product.item.descripcion}</p>
                            <button onClick={() => removeItem(item.product)}>Eliminar Producto</button>
                        </div>
                    )
                })
            }
            <p>total: ${totalPrice.value}</p>
            <p>total: ${totalPrice}</p>
            <p>Productos en carrito: {totalProducts}</p>
            <button onClick={clear}>Vaciar Carrito</button>
        </>
    )
}

export default Carrito;