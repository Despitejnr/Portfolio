import React from "react";
import "./Home.css";
import About from "../../Components/About/About";
import Brand from "../../Components/Brands/Brand";
import Service from "../../Components/Services/Service";
import Cstudy from "../../Components/CstudyHome/Cstudy";
import Navbar from "../../Components/Navbar/Navbar";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  

  return (
    <div>
        <Navbar/>
        <About />
        <Brand />
        <Service />
        <Cstudy />
        <GetInTouch/>
        <Footer/>
    </div>
  );
};

export default Home;