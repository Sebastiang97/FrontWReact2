import React, { useContext } from 'react'
import { AuthContext } from '../context/contex'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Login } from '../pages/login'
import { SignUp } from '../pages/SignUp'

export const PublicRoutes = ({ children }) => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {user.logged ? (
        <Navigate to='/home' />
      ) : (
        <div className='container'>
          <Routes>
            <Route path='/' element={<h1>Hola mundo</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<h1>Pagina no encontrada</h1>} />
          </Routes>
        </div>
      )}
    </>
  )
}
