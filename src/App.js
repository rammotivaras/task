import React, { useState } from "react";
import './App.css';
function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newCartItems = [...cartItems];
    const productItem = newCartItems.find((i) => i.name === item.name);

    if  (productItem) {
     productItem.quantity++;
     productItem.price += item.price;
    } else {
      newCartItems.push({
        ...item,
        quantity: 1,
      });
    }
    

    setCartItems(newCartItems);
  };

  const incrementPrice = (item) => {
    const newCartItems = [...cartItems];
    const productItem = newCartItems.find((i) => i.name === item.name);

    if ( productItem) {
     productItem.price += item.price;
    }

    setCartItems(newCartItems);
  };

  const decrementPrice = (item) => {
    const newCartItems = [...cartItems];
    const productItem = newCartItems.find((i) => i.name === item.name);

    if  (productItem) {
     productItem.price -= item.price;

      if ( productItem.price < 0) {
     productItem.price = 0;
      }
    }

    setCartItems(newCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <ul >
        {cartItems.map((item, index) => (
          <li className="count" key={index}>
    
            {item.name} - Quantity: {item.quantity}, Price: {item.price}
            <button className="btn-m1" onClick={() => incrementPrice(item)}>+</button>
            <button className="btn-m2" onClick={() => decrementPrice(item)}>-</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Products</h3>
        <div>
          <img
            src="./images/image1.jpg"
            alt="Product 1"
            width="100"
            height="100"
          />
          <button className="btn-1" onClick={() => addToCart({ price: 1000 })}>
            Add to Cart
          </button>
        </div>
        <div>
          <img
            src="./images/image2.jpg"
            alt="Product 2"
            width="100"
            height="100"
          />
          <button className="btn-2" 
          onClick={() => addToCart({  price: 20})}>
            Add to Cart
          </button>
        </div>
        <div>
          <img
            src="./images/image3.jpg"
            alt="Product 3"
            width="100"
            height="100"
          />
          <button className="btn-3" onClick={() => addToCart({price: 300})}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="price">
        Total Price: {getTotalPrice()}
      </div>
    </div>
  );
}

export default Cart;
