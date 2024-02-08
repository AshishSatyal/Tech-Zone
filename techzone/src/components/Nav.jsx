import React from "react";
import NavLinks from "./NavLinks";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <Link to='/'>
          <p className='logo-text'>
            Tech<span>Zone</span>
          </p>
        </Link>
      </div>

      <NavLinks />
    </div>
  );
};

export default Nav;
