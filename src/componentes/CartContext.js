import { createContext, useState} from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

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
    };
    setCart(cartAux)

    let auxTotalPrice = 0
    let auxTotalProducts = 0

    auxTotalPrice = totalPrice
    auxTotalPrice += (product.precio*count)
    setTotalPrice(auxTotalPrice)

    auxTotalProducts = totalProducts
    auxTotalProducts += count
    setTotalProducts(auxTotalProducts)

    const removeItem = (product) => {
        if (isInCart(product)) {

            let auxTotalPrice = 0
            let auxTotalProducts = 0

            const cartAux = cart.filter(item => item.product !== product)

            cartAux.forEach((item) => {
                auxTotalPrice += (product.precio*item.count)
                setTotalPrice(auxTotalPrice)

                auxTotalProducts += item.count
                setTotalProducts(auxTotalProducts)
            })

            setCart(cartAux)

            if (cartAux.length===0){
                clear()
            }
        }
    };

    const clear = () => {
        setCart([])
        setTotalPrice(0)
        setTotalProducts(0)
    };

    const isInCart = (product) => {
        return cart && cart.some(item => item.product === product)
    };

    const valorProvider = {
        addItem,
        removeItem,
        clear,
        totalPrice,
        totalProducts,
        cart
    }

    return(
        <CartContextProvider value={valorProvider}>
            {children}
        </CartContextProvider>
    )
}
