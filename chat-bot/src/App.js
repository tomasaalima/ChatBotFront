import React from 'react';
import { Outlet } from 'react-router-dom';
import Backg from './components/Background';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App(){

  return(
    <div className='h-screen w-full'>
      <Menu/>
      <Backg/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App;