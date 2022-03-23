import { createContext, useState} from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        let cartProducto = {producto, cantidad}

        let cartAux = []

        if (isInCart(producto)) {
            cartProducto = cart.find(item => item.producto === producto)

            cartProducto.cantidad = cartProducto.cantidad + cantidad

            cartAux = [...cart]
        } else {
            cartAux = [cartProducto, ...cart]
        }
        setCart(cartAux)
    };

    const removeItem = (producto) => {
        if (isInCart(producto)) {
            const cartAux = cart.filter(item => item.producto !== producto)
            setCart(cartAux)
        }
    };

    const clear = () => {
        setCart([])
    };

    const isInCart = (producto) => {
        return cart && cart.some(item => item.producto === producto)
    };

    return(
        <CartContextProvider 
        value={{
            addItem,
            removeItem,
            clear,
            cart
        }}
        >
            {children}
        </CartContextProvider>
    )
}