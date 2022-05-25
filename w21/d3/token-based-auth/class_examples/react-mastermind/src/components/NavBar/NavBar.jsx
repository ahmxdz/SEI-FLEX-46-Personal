import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './NavBar.css';

const NavBar = (props) => {
  const noUserLoggedInNav = (
    <div>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      |
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
    </div>
  )

  const userLoggedInNav = (
    <div>
      <Link to='/high-scores' className='NavBar-link'>HIGH SCORES</Link>
      |
      <Link to='' className='NavBar-link' onClick={() => {
        props.handleLogout();
      }}>LOG OUT</Link>
        |   <span className='NavBar-welcome'>WELCOME, {props.user?.name}</span>
    </div>
  )

  return (
    <div className='NavBar'>
      {props.user ? userLoggedInNav : noUserLoggedInNav}
    </div>
  );
};

export default NavBar;