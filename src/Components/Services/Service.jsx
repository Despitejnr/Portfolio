import React from 'react'
import './Service.css'
import statistics from '../../assets/statistics.png'
import objective from '../../assets/objective.png'
import training from '../../assets/training.png'
import consultation from '../../assets/consultation.png'

function Service(){

    return(
        <section>
                <div className="container-service">

                    <div className="h1-caption">
                        <h1>Services</h1>
                        <p><span>
                            Comprehensive marketing solutions to help your brand grow and with your audience in
                        </span></p>

                        <p><span>meaningful ways.</span></p>
                    </div>


                    <div className="card-multi-container">

                        <div className="cards">
                            <div className="image">
                            <img src={statistics} alt="" />
                         </div>

                        <div className="image">
                            <h1>Strategy</h1>
                        </div>

                            <div className="cap-text">
                                <p><span>Develop comprehensive digital</span></p>
                                <p><span>marketing strategies tailored</span></p>
                                <p><span>to your business goals and</span></p>
                                <p><span>target audience.</span></p>
                         </div>
                        </div>


                        {/* ================= First Div ===================== */}


                        <div className="cards">
                            <div className="image">
                            <img src={objective} alt="" />
                         </div>

                        <div className="image">
                            <h1>Campaigns</h1>
                        </div>

                            <div className="cap-text">
                                <p><span>Create and execute engaging</span></p>
                                <p><span>campaigns across multiple</span></p>
                                <p><span>platforms to driven results and</span></p>
                                <p><span>maximize ROI.</span></p>
                         </div>
                        </div>

                         {/* ================= First Div ===================== */}


             
                         <div className="cards">
                            <div className="image">
                            <img src={training} alt="" />
                         </div>

                        <div className="image">
                            <h1>Traning</h1>
                        </div>

                            <div className="cap-text">
                            <p><span>Empower your team with the skills</span></p>
                                <p><span>and knowledge needed to excel in</span></p>
                                <p><span>the digital marketing lanspace.</span></p>
                         </div>
                        </div>


                        <div className="cards">
                            <div className="image">
                            <img src={consultation} alt="" />
                         </div>

                        <div className="image">
                            <h1>Consultation</h1>
                        </div>

                            <div className="cap-text">
                                <p><span>Get expert advice and insights to</span></p>
                                <p><span>solve soecific marketing</span></p>
                                <p><span>challenging and optimize your</span></p>
                                <p><span>existing efforts.</span></p>
                         </div>
                        </div>
                    </div>          


                    </div>

            
            
        </section>
    );
}

export default Service;