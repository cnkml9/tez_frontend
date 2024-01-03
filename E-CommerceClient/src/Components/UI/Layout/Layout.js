import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logout from '../../Admin/Login/logout';
import GoogleLogout from '../../Admin/Login/GoogleLogout';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken);
  return (
    <>
    <Navbar/>
      <Outlet />
    <Footer/>
    </>
  );
};

export default Layout;
