import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {


  return (
    <>
   
 
        <Header></Header>
        
        <Outlet></Outlet>
        
        <Footer></Footer>

  

  
    </>
  )
}

export default App
