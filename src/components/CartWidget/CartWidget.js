import React from 'react';
import { ReactComponent as CartLogo } from './shopping-cart.svg';

function CartWidget(params) {
  return (
    <a href='/'>
      <CartLogo />
    </a>
  );
}

export default CartWidget;
