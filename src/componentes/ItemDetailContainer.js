import { useState, useEffect } from 'react';
import {FaSpinner} from 'react-icons/fa';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({productList}) => {

    const [product, setProduct] = useState ({})
    const [loading, setLoading] = useState ({})

    useEffect (() => {

        setTimeout (() => {
            setProduct (productList [0]);
            setLoading (false);
        },2000)
    })

    return (
        <div>
            <h2>Detalles del producto:</h2>
            {loading ? <FaSpinner/> : <ItemDetail item={product}/>}
        </div>
    )
}

export default ItemDetailContainer;