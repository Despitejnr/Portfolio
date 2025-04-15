import React from 'react'
import './Footer.css'
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
       <div className='footer-logo'>
           <h1>LOGO</h1>
           <p>Strategic digital marketing solutions to help your brand tell its story and connect with your audience in meaningful ways</p>
           <div className='footer-img'>
               <FiFacebook className='footer-icon'/>
               <FaXTwitter className='footer-icon'/>
               <SlSocialLinkedin className='footer-icon'/>
               <FaInstagram className='footer-icon'/>
           </div>
       </div>
       <div className='footer-links'>
           <h3>Quick Links</h3>
           <ul>
             <Link>Home</Link>
             <Link>Work Experience</Link>
             <Link>Blog</Link>
             <Link>Services</Link>
             <Link>Case Studies</Link>
           </ul>
       </div>
       <div className='footer-contact'>
            <h3>Contact</h3>
            <p>Email: hello@digitalmarketer.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Location: New York, USA</p>
       </div>
       </div>
       <hr/>
       <div className='footer-bottom'>
           <p>© 2025.Designed by EliTech Creatives <br/>All rights reserved.</p>
           <div className='footer-policy'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            
           </div>
       </div>
    </div>
  )
}

export default Footer
