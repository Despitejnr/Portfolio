import React from 'react'
import './GetInTouch.css'
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const GetInTouch = () => {
  return (
    <div className='getintouch' id='contact-getInTouch'>
        <div className='contact'>
            <h1>Get In Touch</h1>
            <p>Have a project in mind or want to discuss how we can work together? I'm always open to new opportunities and challenges.</p>
            <div className='email'>
              <MdOutlineMail className='email-icon'/>
               <p>Email<br/><span>hello@digitalmarketer.com</span></p>
            </div>
            <div className='phone'>
              <FiPhone className='phone-icon'/>
               <p>Phone<br/><span>+1 234 567 890</span></p>
            </div>
            <div className='location'>
              <SlLocationPin className='location-icon'/>
               <p>Location<br/><span>New York, USA</span></p>
            </div>
        </div>

        <div className='form'>
            <h2>Send me a message</h2>
            <form>
                <div className='name-email'>
                    <div className='form-name'>
                      <label>Name</label><br/>
                      <input type="text" placeholder='Your name' />
                    </div>
                    <div className='form-email'>
                    <label>Email</label><br/>
                    <input type="email" placeholder='Your email' />
                    </div>
                
                </div>
                <label>Subject</label><br/>
                <input type="text" placeholder='Subject of your message' /><br/>
                <label>Message</label><br/>
                <textarea placeholder='Write your message here'></textarea><br/>
                <button>Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default GetInTouch
