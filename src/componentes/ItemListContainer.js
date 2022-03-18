import React, { useState, useEffect } from 'react';
import {ItemList} from './ItemList';
import { data } from '../pages/data';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { catId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = catId? data.filter((item) => item.categoria === catId): data;

                resolve(myData);
            }, 2000);
        });

        getItems
        .then((res) => {
            setItems(res);
        })
        .finally(() => setLoading(false));
    }, [catId]);

    return loading ? (
        <h2>CARGANDO...</h2>
    ) : (
        <>
        <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
        <ItemList items={items}/>
        </>
    )
}