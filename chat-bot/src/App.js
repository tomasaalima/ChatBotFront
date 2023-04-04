import React from 'react';
import { Outlet } from 'react-router-dom';
import Backg from './components/backg';
import Footer from './components/footer';
import Menu from './components/menu';

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