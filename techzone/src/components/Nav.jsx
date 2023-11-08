import React from "react";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <p className='logo-text'>TechZone</p>
      </div>
      <div className='search-container'>
        <input type='search' placeholder='Search' className='search' />
      </div>
      <NavLinks />
      <div>
        <button className='btn login-btn'>Login</button>
      </div>
    </div>
  );
};

export default Nav;