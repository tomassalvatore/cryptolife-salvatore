import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
  const onAdd = () => {
    console.log('Agregado al carrito!');
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock='10' initial='1' onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
