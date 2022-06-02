import React from 'react'
import { Routes, Route } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/home' element={<h1>Hola mundo</h1>} />
          <Route path='*' element={<h1>Pagina no encontrada</h1>} />
        </Routes>
      </div>
    </>
  )
}
