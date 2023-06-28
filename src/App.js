// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Product from './pages/Product';
// import Navbar from './pages/Navbar';
// import './App.css';
// const App = () => {
//   return (
//     <div> 
//     <Router>
//     <Navbar/>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/product' element={<Product/>}/>
//       </Routes>
//     </Router>

//     </div>
//   )
// }

// export default App ; 
 
// import React,{useState} from 'react'
// import './App.css';
// import { BrowserRouter as Router} from 'react-router-dom';
// import Routess from './components/front/routes/Routes';
// import data from './components/back/data/Data';
// import Header from './components/front/header/Header';
// const App = () => { 
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddProduct = (product) =>{
//     const productExist = cartItems.find((item)=>item.id === product.id);
//     if(productExist){
//       setCartItems(cartItems.map((item)=>item.id === product.id ? 
//       {...productExist, quantity: productExist.quantity + 1}:item
//       ));
//     }else{
//       setCartItems([...cartItems,{...product,quantity: 1}]);
//     }
  

//     }
//     const handleRemoveProduct = (product) =>{
//     const productExist = cartItems.find((item)=>item.id === product.id);
// if(productExist.quantity === 1){
//   setCartItems.filter((item)=>item.id !== product.id)
// }else{
//   setCartItems(cartItems.map((item,i)=>item.id===product.id?{...productExist,quantity:productExist.quantity -1}: item))
// }
//     }
  
//   const {productItems} = data ; 
//   return (
//     <div>
//     <Router>
      

//       <Header/>
//       <Routess productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
//     </Router>
//     </div>
//   )
// }

// export default App 
 
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routess from './components/front/routes/Routes';
import data from './components/back/data/Data';
import Header from './components/front/header/Header';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : item
        )
      );
    }
  };

  const { productItems } = data;

  const handleCartClearence=()=>{
    setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Routess
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearence={handleCartClearence}
        />
      </Router>
    </div>
  );
};

export default App;
