import React from 'react'
import { Errors } from '../components/Errors'

export const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault()
    post('/api/auth/signup', {
      name: email.value,
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
        className=''
        href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google'
      >
        <FcGoogle /> Iniciar sesión con Google
      </a>
      <form className='' onSubmit={handleSignUp}>
        <input className='' type='text' name='name' />
        <input className='' type='email' name='email' />
        <input className='' type='password' name='password' />
        <button className=''>Registro</button>
      </form>
      <Errors errors={errors} />
    </>
  )
}
