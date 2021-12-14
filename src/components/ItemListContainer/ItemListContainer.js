import React from 'react';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../products';

const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    const list = getProducts(categoryId);

    list.then((response) => {
      setProduct(response);
    });

    return () => {
      setProduct([]);
    };
  }, [categoryId]);

  return (
    <div>
      {product.length !== 0 ? (
        <div>
          {categoryId === undefined ? (
            <h2 className='titulo'>{greeting}</h2>
          ) : (
            <h2 className='titulo'>{categoryId.toUpperCase()}</h2>
          )}
          <ItemList product={product} />
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default ItemListContainer;
