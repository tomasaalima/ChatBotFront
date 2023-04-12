import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/NavBar';

function App(){

  return(
    <div className='h-screen w-full'>
      <Menu/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;