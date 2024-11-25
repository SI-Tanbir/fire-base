
import React from 'react'
import Header from '../Header/Header'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>

            <h3> hey this home</h3>
            <Link to='/login' >Login</Link>
        
    </div>
  )
}

export default Home