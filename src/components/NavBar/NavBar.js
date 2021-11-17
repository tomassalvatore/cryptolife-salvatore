import { React } from 'react';
import './NavBar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='company-name'>CryptoLife</h1>
      <a href='/'>Home</a>
      <a href='/'>Login</a>
      <a href='/'>Cart</a>
    </nav>
  );
}

export default Navbar;
