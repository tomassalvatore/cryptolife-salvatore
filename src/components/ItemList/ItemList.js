import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ product }) => {
  console.log(product);

  return (
    <div>
      {product.map((p) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Item key={p.id} product={p} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
