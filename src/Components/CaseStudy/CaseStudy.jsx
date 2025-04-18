import React from 'react'
import './CaseStudy.css'
// This image is just temporary for all
import temp from "../../assets/Case-Study.jpeg";

const caseStudies = [
  {
    title: "Global Brand Launch Campaign",
    description: "Led the digital marketing strategy for a tech startup's global brand launch, resulting in a 45% conversion rate and 150K new users within the first month.",
    image: temp,
    challenge: "The client needed to establish market presence quickly while facing stiff competition from established players with larger budgets.",
    solution: "Implemented a multi-channel approach that prioritized audience engagement and leveraged the client's unique value proposition.",
    strategy: "Combined organic social growth with targeted paid campaigns, content marketing, and influencer partnerships.",
    results: "Achieved 2.5M impressions, 150K new users, and a 27% increase in customer acquisition cost within the first month."
  },
  {
    title: "Social Media Revamp",
    description: "Revamped social media strategy for a major fashion retailer, increasing engagement by 78% and driving a 45% boost in social referral sales.",
    image: temp,
    challenge: "The client needed to establish market presence quickly while facing stiff competition from established players with larger budgets.",
    solution: "Implemented a multi-channel approach that prioritized audience engagement and leveraged the client's unique value proposition.",
    strategy: "Combined organic social growth with targeted paid campaigns, content marketing, and influencer partnerships.",
    results: "Achieved 2.5M impressions, 150K new users, and a 27% increase in customer acquisition cost within the first month."
  },
  {
    title: "E-commerce Performance Optimization",
    description: "Transformed an e-commerce platform's digital presence through comprehensive optimization, resulting in a 95% increase in online sales and 60% improvement in conversion rates.",
    image: temp,
    challenge: "The e-commerce platform was struggling with high cart abandonment rates, poor mobile performance, and declining conversion rates despite steady traffic.",
    solution: "Implemented a data-driven optimization strategy focusing on user experience, mobile responsiveness, and conversion rate optimization (CRO).",
    strategy: "Conducted thorough analytics analysis, implemented A/B testing, optimized checkout process, and enhanced mobile experience with progressive web app features.",
    results: "Achieved 95% increase in sales, 60% improvement in conversion rates, and reduced cart abandonment by 45% within 6 months."
  }
];

const CaseStudy = () => {
  return (
    <div className="case-study-container">
      <div className="case-study-content">
        <div className="case-study-header">
          <h1>Case Studies</h1>
          <p>Explore detailed case studies showcasing the strategies, challenges, and results of my most successful digital marketing projects.</p>
        </div>

        <div className="case-study-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className={`case-study-card ${index % 2 === 1 ? 'image-right' : ''}`}>
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
              </div>
              <div className="case-study-details">
                <h2>{study.title}</h2>
                <p className="case-study-description">{study.description}</p>
                
                <div className="case-study-sections">
                  <div className="section">
                    <h3>Challenge</h3>
                    <p>{study.challenge}</p>
                  </div>
                  
                  <div className="section">
                    <h3>Solution</h3>
                    <p>{study.solution}</p>
                  </div>
                  
                  <div className="section">
                    <h3>Strategy</h3>
                    <p>{study.strategy}</p>
                  </div>
                  
                  <div className="section">
                    <h3>Results</h3>
                    <p>{study.results}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseStudy 