import React, { Component } from 'react'
import Footer from './Footer/footer'
import Header from './Header/header';
import Sidebar from './Sidebar/sidebar'
 class Layout extends Component {
  render() {
    return (
        <>
     <Header/>
     <Sidebar/>
      <Footer/>
      </>
    )
  }
}

export default Layout;