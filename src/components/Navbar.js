import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = props => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-light
     '
    >
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='collapse navbar-collapse show ml-sm-5'>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/recipes' className='nav-link'>
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
