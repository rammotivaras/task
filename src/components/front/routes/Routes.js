import React from 'react';
import Products from '../products/Products';
import Signup from '../signup/Signup';
import Cart from '../cart/Cart';

import {Route,Routes} from 'react-router-dom';
const Routess = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearence}) => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
        <Route path='signup' exact element={<Signup/>} />
        <Route path='cart' exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct} handleCartClearence={handleCartClearence}
        />} />
      </Routes>
    </div>
  )
}

export default Routess;