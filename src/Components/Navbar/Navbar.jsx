import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

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
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/work-experience' className='nav-link'>Work Experience</Link>
        <Link to='/blog' className='nav-link'>Blog</Link>
        <Link to='#getintouch' id='getintouch'>Get in Touch</Link>
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
