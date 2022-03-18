import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { data } from '../pages/data';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    console.log(itemId);

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
            const myData = data.find((item) => item.id === itemId);

            resolve(myData);
            }, 2000);
        });

        getItems
            .then((res) => {
            setProducto(res);
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return loading ? <h2>CARGANDO...</h2> : <ItemDetail {...producto} />;
};

export default ItemDetailContainer;