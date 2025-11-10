import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
   
  return (
   <div className="navbar shadow-md mt-5 bg-linear-to-r from-[#F22E07] to-[#AB2207] text-white rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
          <NavLink to={'/allBooks'}>All Books</NavLink>
           
        </li>
        <li><NavLink to={'/addBook'}>Add Book</NavLink></li>
        <li><NavLink to={'/myBooks'}>My Books</NavLink></li>
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
          <NavLink to={'/allBooks'}>All Books</NavLink>
         
        </li>
        <li><NavLink to={'/addBook'}>Add Book</NavLink></li>
        <li><NavLink to={'/myBooks'}>My Books</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'/register'} className="btn bg-red-500 text-white">Register</Link>
  </div>
</div>
  );
};

export default Navbar;