import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.img} alt={item.name}></img>
      </div>
      <div>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>Precio: {item.price}</p>
        <ItemCount stock='10' initial='1' />
      </div>
    </div>
  );
};

export default ItemDetail;
