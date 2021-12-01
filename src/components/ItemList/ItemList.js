import React from 'react';
import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';

const ItemList = ({ product }) => {
  console.log(product);

  return (
    <div>
      <div>
        <div>
          {product.map((p) => (
            <div>
              <Item key={p.id} product={p} />
              <ItemCount stock={p.stock} initial='1' key={Math.random} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
