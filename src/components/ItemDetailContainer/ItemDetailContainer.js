import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../products';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const list = getProductById(id);

    list.then((response) => {
      setItem(response);
    });

    return () => {
      setItem([]);
    };
  }, [id]);

  return <div>{item.length !== 0 ? <ItemDetail item={item} /> : 'Loading...'}</div>;
};

export default ItemDetailContainer;
