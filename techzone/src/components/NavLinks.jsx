import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavLinks = () => {
  return (
    <div className='nav-links'>
      <ul className='links'>
        <li>
          <a className='uppercase' href='#'>
            categories
          </a>
        </li>
        <li>
          <a className='uppercase' href='#'>
            Product page
          </a>
        </li>

        <a href='' className='cart-icon'>
          <FaShoppingCart />
        </a>
      </ul>
    </div>
  );
};

export default NavLinks;
