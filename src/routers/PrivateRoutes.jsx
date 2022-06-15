import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/context'

export const PrivateRoutes = ({ children }) => {
  const { logged } = useContext(AuthContext)

  return logged ? children : <Navigate to='/auth/login' />
}
