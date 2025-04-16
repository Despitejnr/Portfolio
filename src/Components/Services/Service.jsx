import React from 'react'
import './Service.css'
import statistics from '../../assets/statistics.png'
import objective from '../../assets/objective.png'
import training from '../../assets/training.png'
import consultation from '../../assets/consultation.png'

function Service(){
    const cardData = [
        {
          img: statistics,
          title: "Strategy",
          lines: [
            "Develop comprehensive digital",
            "marketing strategies tailored",
            "to your business goals and",
            "target audience."
          ]
        },
        {
          img: objective,
          title: "Campaigns",
          lines: [
            "Create and execute engaging",
            "campaigns across multiple",
            "platforms to drive results and",
            "maximize ROI."
          ]
        },
        {
          img: training,
          title: "Training",
          lines: [
            "Empower your team with the skills",
            "and knowledge needed to excel in",
            "the digital marketing landscape."
          ]
        },
        {
          img: consultation,
          title: "Consultation",
          lines: [
            "Get expert advice and insights to",
            "solve specific marketing",
            "challenges and optimize your",
            "existing efforts."
          ]
        }
      ];
      
    return(
        
        <section>
                <div className="container-service" id='service'>

                    <div className="h1-caption">
                        <h1>Services</h1>
                        <p><span>
                            Comprehensive marketing solutions to help your brand grow and with your audience in
                        </span></p>

                        <p><span>meaningful ways.</span></p>
                    </div>


                    <div className="card-multi-container">
                         {cardData.map((card, index) => (
                         <div className="cards" key={index}>
                           <div className="image">
                             <img src={card.img} alt={card.title} />
                           </div>

                           <div className="image">
                             <h1>{card.title}</h1>
                           </div>

                           <div className="cap-text">
                             {card.lines.map((line, i) => (
                               <p key={i}><span>{line}</span></p>
                             ))}
                           </div>
                         </div>
                       ))}
                     </div>

                </div>
            
            
        </section>
    );
}

export default Service;