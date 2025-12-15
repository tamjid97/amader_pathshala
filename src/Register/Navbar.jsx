import React from 'react';
import logo from '../assets/1st ap logo white-bg.png'

const Navbar = () => {
  return (
  <div className="navbar sticky top-0 bg-gradient-to-b from-green-100 to-green-300 shadow-sm z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>HSC</a></li>
        <li><a>SSC</a></li>
      </ul>
    </div>
  <div className='w-55 h-10'>
    <img src={logo} alt="" className='h-50 w-60 -mt-17'/>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
        <li><a>HSC</a></li>
        <li><a>SSC</a></li>
    </ul>
  </div>
  
</div>
  );
};

export default Navbar;