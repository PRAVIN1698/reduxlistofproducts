import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const items = useSelector(state => state.cart);

  return (
    <div className="navbar">
      <span className='logo'>Redux Store</span>
      <div className="navlinks">
        <Link className="navlink" to="/">Home</Link>
        <Link className="navlink" to="/cart">Cart</Link>
        <span className='cartCounter'>cart items: {items.length}</span>
      </div>
    </div>
  );
};
