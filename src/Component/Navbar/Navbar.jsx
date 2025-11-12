import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
 
const Navbar = () => {
  const {user,setUser,loading,signOutFunc}=useContext(AuthContext);
  console.log(user);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }

  const handleSignOut=()=>{
    signOutFunc()
    .then(res=>{
      console.log(res)
      setUser(null)
      // toast.success('log-out successful')
      toast.success('log-out successful')
    })
    .catch(error=>{
      console.log(error.message)
      toast.error(error.message);
    })
  };

  
   
  return (
   <div className="navbar shadow-md mt-5 bg-linear-to-r from-[#F22E07] to-[#AB2207] text-white rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
          <NavLink to={'/allBooks'}>All Books</NavLink>
           
        </li>
       <li><NavLink to={'/addBook'}>Add Book</NavLink></li>
        <li><NavLink to={'/myBooks'}>My Books</NavLink></li>
        <li><NavLink to={'/addBook'}>Add Book</NavLink></li>
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

    <input onChange={(e)=>handleTheme(e.target.checked)}
            
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>

{/* conditional */}
{loading ? (
        //  <FaClock/>
        <p>loading</p>

        ) : user ? (
           <div className="dropdown dropdown-end px-5">
  <div tabIndex={0} role="button" className="border-none"><img src={user?.photoURL ? user.photoURL : 'https://via.placeholder.com/88'} className='h-10 w-10 rounded-full mx-auto' alt="user avatar" /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-purple-700 rounded-box z-1 w-52 p-2 shadow-sm">

 

    <li><a>Name : {user?.displayName}</a></li>
     <button onClick={handleSignOut}   className='bg-violet-700 px-2 py-1 mt-1 hover:bg-amber-700 rounded-lg'>Log-out</button>
  </ul>
</div>
        ) : (
           <Link to={'/register'} className="btn bg-red-500 text-white">Register</Link>
        )}

   
  </div>
</div>
  );
};

export default Navbar;