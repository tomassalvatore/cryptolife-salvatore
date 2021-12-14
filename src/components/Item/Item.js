import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div
      style={{
        width: 300,
        marginBottom: 10,
        padding: 10,
        backgroundColor: 'gray',
      }}
    >
      <img src={product.img} alt={product.name} style={{ maxWidth: 100 }}></img>
      <h5 style={{ margin: 10 }}>{product.name}</h5>
      <p>Price: {product.price}</p>
      <Link
        to={`/detail/${product.id}`}
        style={{ color: 'black', backgroundColor: 'lightgray', padding: 10, marginLeft: 10 }}
      >
        Product detail
      </Link>
      <p>Available Stock: {product.stock}</p>
      <ItemCount stock={product.stock} initial='1' key={Math.random} />
    </div>
  );
};

export default Item;
