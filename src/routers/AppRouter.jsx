import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { SignUp } from '../components/auth/SignUp'
import { AuthContext } from '../context/contex'
import { Dashboard } from './Dashboard'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  const { theme } = useContext(AuthContext)

  return (
    <div className={theme ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path='/signup'
          element={
            <PublicRoutes>
              <SignUp />
            </PublicRoutes>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  )
}
