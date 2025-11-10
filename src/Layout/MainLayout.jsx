import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Title from '../Component/Title';
import Footer from '../Component/Footer';

const MainLayout = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Title></Title>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;