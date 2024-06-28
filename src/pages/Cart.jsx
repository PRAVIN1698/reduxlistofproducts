import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removecart } from '../store/cartSlice'; // Adjust the import path as per your project structure
import './cart.css';

const Cart = () => {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removecart(product)); // Dispatch the removecart action with the product to remove
  };

  return (
    <div className="product-list">
      {items.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          {/* Pass the product to the handleRemoveFromCart function */}
          <button className='cartbutton' onClick={() => handleRemoveFromCart(product)}>remove from cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
