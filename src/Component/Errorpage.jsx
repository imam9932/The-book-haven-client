import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Errorpage = () => {
  return (
   <div>
    <Navbar></Navbar>

     <div className='text-[#f22e07] flex flex-col justify-center items-center my-30'>
<h1 className='text-3xl font-bold'>Oops , You are in wrong state</h1>
<h2 className='text-3xl font-bold mt-5'>Page couldn't found</h2>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default Errorpage;