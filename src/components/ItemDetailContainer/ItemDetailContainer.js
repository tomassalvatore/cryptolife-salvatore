import React from 'react';
import { useState, useEffect } from 'react';
import { getItem } from '../../products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const list = getItem();

    list.then((response) => {
      setItem(response);
    });

    return () => {
      setItem([]);
    };
  }, []);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
