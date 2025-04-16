import React from "react";
import "./About.css";
import { FaArrowRight } from "react-icons/fa";
import photo from "../../assets/young-man.jpeg";

function About() {
  return (
    <section id="about">
      <div className="container">

      <div className="image">
        <img src={photo} alt="About Me" className="about-image" />
      </div>

      <div className="text-container">
      <div className="caption">
        <h3><span id="one">Digital Marketing &</span></h3>
        <h3><span id="two">Communication</span></h3>
        <h3><span id="three">Proffessioinal</span></h3>
      </div>

      <div className="text">
        <p><span id="one">Helping brands tell their stories and connect with their audience throght</span></p>
        <p><span id="two">strategy digital marketing and communication solutions. With over 8 years</span></p>
        <p><span id="three">of experience working with global brands, I bring creativity and data-driven</span></p>
        <p><span id="three">strategies to deliver exceptional results.</span></p>
      </div>

      <div className="btns">
        <button id="explore-btn" href="#Explore Services">Explore Services <FaArrowRight /></button>
        <button id="casestudy-btn" href="#View Case Studies">View Case Studies</button>
      </div>
      </div>
      </div>
    </section>
  );
}

export default About;