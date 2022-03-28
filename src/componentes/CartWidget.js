import {FaStore} from 'react-icons/fa';
import { CartContext } from './CartContext';
import { useContext } from 'react';

function CartWidget() {
    const {cart} = useContext(CartContext)
    
    return <FaStore className={cart.length>0 ? "cartWidgOn" : "cartWidgOff"}/>
}

export default CartWidget;