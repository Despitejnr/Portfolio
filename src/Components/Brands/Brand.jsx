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
        <div className="brand-item">
              <img src={photo} alt="Brand 1" />
              <img src={node8} alt="Brand 2" />       
              <img src={uniliver} alt="Brand 3" />
              <img src={Sanofi} alt="Brand 3" />
              <img src={mestAfrica} alt="Brand 3" />
              <img src={jessi} alt="Brand 3" />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
