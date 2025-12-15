import React from 'react';
import Navbar from '../Register/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Register/Footer';

const HomeLayout = () => {
  return (
    <div>
      <Navbar/>

      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  );
};

export default HomeLayout;