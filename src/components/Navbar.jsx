import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

        <h2 className='logo'>Job-Board</h2>
        <ul>
      <NavLink to='/'><li>Home</li></NavLink>
      <NavLink to='/jobs'><li>Jobs</li></NavLink>
      <NavLink to='/about'><li>About</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar
