import React from 'react';
import { useState } from 'react';

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const fromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartContent, setCartContent] = useState(fromLocalStorage);

  const addItem = (item, quantity) => {
    const flag = isInCart(item.id);

    if (quantity > 0) {
      if (flag) {
        let repeatedProduct = cartContent.find((element) => element.id === item.id);

        if (repeatedProduct.quantity + quantity <= repeatedProduct.stock) {
          repeatedProduct.quantity += quantity;
          repeatedProduct.price *= repeatedProduct.quantity;

          let simpleCart = cartContent.filter((element) => element.id !== item.id);
          let array = JSON.stringify([...simpleCart, repeatedProduct]);
          window.localStorage.setItem('cart', array);

          setCartContent([...simpleCart, repeatedProduct]);
        } else {
          window.alert(`You added more than allowed`);
        }
      } else {
        const product = {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          stock: item.stock,
          quantity: quantity,
        };

        let array = JSON.stringify([...cartContent, product]);
        window.localStorage.setItem('cart', array);

        product.price *= product.quantity;
        setCartContent([...cartContent, product]);
      }
    }
  };

  const removeIdem = (itemId) => {
    cartContent.find((element) => element.id === itemId);
    let borrarDelArray = cartContent.filter((element) => element.id !== itemId);

    let array = JSON.stringify(borrarDelArray);
    window.localStorage.setItem('cart', array);

    setCartContent(borrarDelArray);
  };

  const countProducts = () => {
    let count = 0;
    cartContent.forEach((prod) => {
      count = count + prod.quantity;
    });
    return count;
  };

  const isInCart = (id) => {
    return cartContent.some((p) => p.id === id);
  };

  const clear = () => {
    setCartContent([]);
    window.localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ cartContent, setCartContent, clear, removeIdem, isInCart, countProducts, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
