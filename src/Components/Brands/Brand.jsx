import React from 'react'
import './Brand.css'
import photo from '../../assets/ford-logo.jpeg'
import node8 from '../../assets/node8.png'
import uniliver from '../../assets/uniliver-logo.jpeg'
import Sanofi from '../../assets/Sanofi-logo.jpeg'
import mestAfrica from '../../assets/mestAfrica.png'
import jessi from '../../assets/jessi.jpeg'

function Brand() {
  return (
    <section>
      <div className="brand-container">

        <div className="brand-experience">
          <h1>Brands I've Worked With</h1>
        </div>

        <div className="grid-image">
          <div className="brand-track">
            {/* Original images */}
            <img src={photo} alt="Ford" />
            <img src={node8} alt="Node8" />
            <img src={uniliver} alt="Unilever" />
            <img src={Sanofi} alt="Sanofi" />
            <img src={mestAfrica} alt="MEST Africa" />
            <img src={jessi} alt="Jessi" />

            {/* Duplicate for seamless scroll */}
            <img src={photo} alt="Ford" />
            <img src={node8} alt="Node8" />
            <img src={uniliver} alt="Unilever" />
            <img src={Sanofi} alt="Sanofi" />
            <img src={mestAfrica} alt="MEST Africa" />
            <img src={jessi} alt="Jessi" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
