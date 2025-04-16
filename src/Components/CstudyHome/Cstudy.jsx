import React from 'react';
import './Cstudy.css';
import foto from '../../assets/Case-Study.jpeg';
import { MoveRight } from 'lucide-react';
import { FaArrowRight } from "react-icons/fa";


function Cstudy() {
    return (
        <div className="container-case">
            <div className="case-caption">
                <h1>Case Studies</h1>
                <p>Explore some of my most successful projects and the results they delivered for my clients.</p>
            </div>

            <div className="conti-grid">
                {/* Case Study 1 */}
                <div className="case-study-image">
                    <div className="case-image">
                        <img src={foto} alt="" />
                    </div>
                    <div className="case-text">
                        <h4>Tech Startup</h4>
                        <h1>Global Brand Launch Campaign</h1>
                        <p><span>Led the digital marketing strategy for a tech startup's global brand launch</span></p>
                        <p><span>2.5M impressions and 150K new users within the first month.</span></p>
                        <button className="RIGHT">
                             Read Case Study <FaArrowRight />
                        </button>
                    </div>
                </div>

                {/* Case Study 2 */}
                <div className="case-study-image row-reverse">
                    <div className="case-image">
                        <img src={foto} alt="" />
                    </div>
                    <div className="case-text">
                        <h4>Fashion Retailor</h4>
                        <h1>Social Media Revamp</h1>
                        <p><span>Restructured social media strategy for a major fashion retailer, increasing</span></p>
                        <p><span>engagement by 78% and driving a 45% boost in social-referred sales.</span></p>
                        <button className="RIGHT">
                             Read Case Study <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            <button className="RIGHT-btn">
                 View all Case Studies <FaArrowRight />
            </button>

            
        </div>
    );
}

export default Cstudy;