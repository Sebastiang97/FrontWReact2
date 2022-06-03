import React, { useState } from 'react'
import { post } from '../../api'
import { Errors } from '../../components/Errors'
import "./Login.css" 

export const Login = () => {
  const [errors, setErrors] = useState({
    isErrors: true,
    errors: [],
  })

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault()
    post('/api/auth/login', {
      email: email.value,
      password: password.value,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        setErrors({
          isErrors: true,
          errors: error.errors,
        })
      })
  }

  return (
    <>
      <a
        className='login'
        href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google'
      >
        Login with Google
      </a>
      <form className='' onSubmit={handleLogin}>
        <input className='' type='email' name='email' />
        <input className='' type='password' name='password' />
        <button className=''>Iniciar sesión</button>
      </form>
      <Errors errors={errors} />
    </>
  )
}
