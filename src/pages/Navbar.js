import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  return (
    <nav style={{ background: "#c0aa1a", height: "60px",padding:'20px'}}>
      <ul style={{ display: "flex", justifyContent: "space-between"}}>
        <li >
          <Link style={{textDecoration:'none'}}>logo</Link>
        </li>
        <li >
          <Link style={{textDecoration:'none', padding:10}} to="/home">Home</Link>
          <Link style={{textDecoration:'none'}} to="/product">Product</Link>
        </li>

        <li>
          <Link to="/cart">
            <div style={{color:'black',textDecoration:'none'}}>
              <span style={{textDecoration:'none', bottom:50}}>10</span>
              <ShoppingCartIcon />
            </div>
          </Link>
        </li>
      </ul>
    </nav>

    // {/* <div style={{background:'#c0aa1a',height:'60px'}}>
    // <ul style={{display:'flex',justifyContent:'space-evenly'}}>
    // <li >

    //  <Link to='/home'>Home</Link>
    // </li>
    // <li>

    //  <Link to='/product'>Product</Link>
    // </li>
    //  </ul>
    // </div> */}
  );
};

export default Navbar;
