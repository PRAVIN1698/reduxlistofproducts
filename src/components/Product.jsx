import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          {/* Pass the product to the addToCart function */}
          <button className='cartbutton' onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
