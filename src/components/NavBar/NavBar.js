import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../products';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className='navbar' style={{ padding: 10 }}>
      <Link to='/' style={{ fontSize: 30 }}>
        CryptoLife
      </Link>
      <div>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link key={cat.id} to={`/category/${cat.id}`}>
                {' '}
                {cat.description}{' '}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
