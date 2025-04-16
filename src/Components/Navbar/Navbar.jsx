import React, { useState } from 'react'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
      <div className="logo">
        <h1>CODE PRIDE</h1>
      </div>


     <div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to='/' className={({isActive}) => isActive ? 'nav-link active' :'nav-link'}>Home</NavLink>
        <NavLink to='/work-experience' className={({isActive}) => isActive ? 'nav-link active' :'nav-link'}>Work Experience</NavLink>
        <NavLink to='/blog' className={({isActive}) => isActive ? 'nav-link active' :'nav-link'}>Blog</NavLink>
        <a href='#contact-getInTouch'><button  id='getintouch'>Get in Touch</button></a>
      </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
    </div>
  )
}

export default Navbar
