import React from 'react';

const Item = ({ product }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      }}
    >
      <img src={product.img} alt={product.name} style={{ maxWidth: 100 }}></img>
      <h5 style={{ margin: 10 }}>{product.name}</h5>
      <p>Price: ${product.price}</p>
      <button style={{ color: 'black', marginLeft: 10 }}>Product detail</button>
    </div>
  );
};

export default Item;
