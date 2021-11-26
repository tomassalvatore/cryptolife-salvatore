import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='company-name'>CryptoLife</h1>
      <a href='/'>Home</a>
      <a href='/'>Login</a>
      <a href='/'>Market</a>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
