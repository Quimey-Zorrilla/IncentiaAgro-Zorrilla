import { createContext, useState} from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (product, count) => {
        let cartProduct = {product, count}

        let cartAux = []

        if (isInCart(product)) {
            cartProduct = cart.find(item => item.product === product)

            cartProduct.count = cartProduct.count + count

            cartAux = [...cart]
        } else {
            cartAux = [cartProduct, ...cart]
        }
        setCart(cartAux)
    };

    const removeItem = (product) => {
        if (isInCart(product)) {
            const cartAux = cart.filter(item => item.product !== product)
            setCart(cartAux)
        }
    };

    const clear = () => {
        setCart([])
    };

    const isInCart = (product) => {
        return cart && cart.some(item => item.product === product)
    };

    const valorProvider = {
        cart,
        addItem,
        removeItem,
        clear
    }

    return(
        <CartContextProvider value={valorProvider}>
            {children}
        </CartContextProvider>
    )
}
