import {FaSpinner} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({list}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
        setTimeout(() => {
            setProducts(list);
            setLoading(false);
        },2000)
    })

    return (
    <>
        {loading ? <FaSpinner /> :
        <ul>
            {products.map((item, index) => <Item key={index} name={item.name} price={item.price} />)}
        </ul>
        }
    </>
    )
}


ItemList.propTypes = {
    // An array of objects taking on a particular shape
    list: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired
    ).isRequired

}

export default ItemList;
