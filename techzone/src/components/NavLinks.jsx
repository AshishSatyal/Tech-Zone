import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <ul className='links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Products</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <a href='' className='cart-icon'>
          <FaShoppingCart />
        </a>
      </ul>
    </div>
  );
};

export default NavLinks;
