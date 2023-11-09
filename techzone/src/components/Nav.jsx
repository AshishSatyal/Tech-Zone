import React from "react";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <p className='logo-text'>
          Tech<span>Zone</span>
        </p>
      </div>

      <NavLinks />
    </div>
  );
};

export default Nav;
