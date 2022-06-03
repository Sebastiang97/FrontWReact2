import React from 'react'
import "./Navbar.css"

import {BsCart3} from 'react-icons/bs'

export const Navbar = (props) => {
  return(
    <div className='navbar'>
      <p>About</p>
      <p>Store</p>
      <p>Log out</p>
      <span> 
      <BsCart3/>
      </span>
    </div>
  )
}