import React, { useState } from 'react'
import './Blog.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const blogCategories = [
  "All Categories",
  "Marketing Trends",
  "Content Marketing",
  "Social Media",
  "Email Marketing",
  "Influencer Marketing",
  "Marketing Strategy"
]

const blogPosts = [
  {
    category: "Marketing Trends",
    date: "October 15, 2023",
    readTime: "8 min read",
    title: "10 Digital Marketing Trends That Will Define 2023",
    description: "Explore the key marketing trends that will shape the digital landscape this year, from AI-driven personalization to the rise of short-form video...",
    image: "../assets/"
  },
  {
    category: "Content Marketing",
    date: "September 28, 2023",
    readTime: "10 min read",
    title: "How to Build a Content Strategy That Actually Drives Results",
    description: "Learn the key components of a high-performing content strategy that aligns with business objectives and resonates with your target audience.",
    image: "/blog-2.jpg"
  },
  {
    category: "Social Media",
    date: "September 12, 2023",
    readTime: "7 min read",
    title: "Social Media Algorithms: Staying Ahead of the Curve",
    description: "Discover how to adapt your social media strategy to the ever-changing algorithms across platforms like Instagram, TikTok, and LinkedIn.",
    image: "/blog-3.jpg"
  },
  {
    category: "Email Marketing",
    date: "August 30, 2023",
    readTime: "9 min read",
    title: "Email Marketing in 2023: Beyond the Basics",
    description: "Take your email marketing to the next level with advanced segmentation, automation, and personalization strategies that drive engagement.",
    image: "/blog-4.jpg"
  },
  {
    category: "Influencer Marketing",
    date: "August 15, 2023",
    readTime: "11 min read",
    title: "The ROI of Influencer Marketing: Measuring What Matters",
    description: "Learn how to effectively measure the return on investment of your influencer campaigns beyond simple engagement metrics.",
    image: "/blog-5.jpg"
  },
  {
    category: "Marketing Strategy",
    date: "July 27, 2023",
    readTime: "6 min read",
    title: "Data Privacy and Marketing: Navigating the Changing Landscape",
    description: "Explore how marketers can adapt to increasing data privacy regulations while still delivering personalized customer experiences.",
    image: "/blog-6.jpg"
  }
]

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredPosts = activeCategory === "All Categories" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="blog-container">
      
      <div className="blog-content">
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Insights, strategies, and industry expertise to help you navigate the ever-evolving digital marketing landscape.</p>
        </div>

        <div className="blog-categories">
          {blogCategories.map((category, index) => (
            <button 
              key={index} 
              className={`category-btn ${category === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-card-image">
                <span className="category-tag">{post.category}</span>
                <img src={`/src/assets/blog/${index + 1}.jpg`} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="date">{post.date}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <button className="read-more-btn">Read Article →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection;