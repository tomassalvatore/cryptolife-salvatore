import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProducts } from '../../products';

const ItemListContainer = ({ greeting, message }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const list = getProducts();

    list.then((response) => {
      setProduct(response);
    });

    return () => {
      setProduct([]);
    };
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList product={product} />
    </div>
  );
};

export default ItemListContainer;
