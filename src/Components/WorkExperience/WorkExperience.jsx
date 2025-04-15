import React from 'react'
import './WorkExperience.css'

const workExperiences = [
  {
    period: "Jan 2022 - Present",
    title: "Senior Marketing Director",
    company: "TechGrowth Matrix",
    description: "Leading digital marketing strategies for tech clients, managing a team of 12 marketing professionals, and implementing data-driven campaigns that increased client ROI by 35% on average.",
    achievements: [
      "Developed and executed integrated marketing campaigns for 15+ SaaS clients",
      "Increased client social media engagement by 78% on average",
      "Reduced customer acquisition costs by 42% through optimization strategies",
      "Led team that won 3 industry awards for campaign excellence"
    ]
  },
  {
    period: "Mar 2019 - Dec 2020",
    title: "Marketing Manager",
    company: "Digital Innovations Inc",
    description: "Managed end-to-end marketing campaigns for retail and eCommerce clients, focusing on brand development, content strategy, and performance marketing.",
    achievements: [
      "Developed content strategy that increased organic traffic by 150%",
      "Implemented email marketing automation that boosted conversion by 25%",
      "Managed social media presence across 5 platforms for major retail brands",
      "Coordinated influencer marketing programs with 200+ content creators"
    ]
  },
  {
    period: "Jun 2018 - Feb 2019",
    title: "Digital Marketing Specialist",
    company: "Global Tech Solutions",
    description: "Executed digital marketing initiatives across multiple channels including SEO, PPC, and social media for diverse client portfolio.",
    achievements: [
      "Managed monthly ad spend of $150,000 across Google and Facebook platforms",
      "Improved SEO rankings for 25+ clients, achieving first page results for 80% of target keywords",
      "Created analytics dashboards to track campaign performance",
      "Conducted A/B testing that improved landing page conversion rates by 35%"
    ]
  }
];

const WorkExperienceSection = () => {
  return (
    <div className="work-experience-container">
      <div className="work-experience-content">
        <div className="work-experience-header">
          <h1>Work Experience</h1>
          <p>A comprehensive overview of my professional journey in digital marketing and the impact I've made for brands.</p>
        </div>

        <div className="timeline">
          {workExperiences.map((experience, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-period">{experience.period}</div>
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-company">{experience.company}</div>
                <p className="experience-description">{experience.description}</p>
                <div className="key-achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceSection