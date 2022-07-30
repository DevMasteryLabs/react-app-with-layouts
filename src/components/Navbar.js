import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ backgroundColor: 'gold', padding: '10px 50px', display: 'flex', justifyContent: 'space-between' }}>
        <img src="/logo512.png" width="40px" alt="Logo" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <NavLink to='/login' style={{ marginRight: 50 }}>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
    </div>
  )
}

export default Navbar