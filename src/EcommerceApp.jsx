import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import "./App.css"
import { Navbar } from './components/Navbar/Navbar'
import Home from './components/Home/Home'


export const EcommerceApp = () => {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </div>
    
    
  )
}
