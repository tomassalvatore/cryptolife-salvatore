import React from 'react';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCount] = useState(1);

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button
          onClick={() => {
            if (counter > initial) {
              setCount(counter - 1);
            }
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            if (counter < stock) {
              setCount(counter + 1);
            }
          }}
        >
          +
        </button>
        <button onClick={() => onAdd()} type='button'>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
