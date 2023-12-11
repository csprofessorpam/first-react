import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
        <Link to='/'><p>Logo</p></Link>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </nav>

    </div>
  )
}

export default Header