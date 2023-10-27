import React,{useEffect} from "react";
import "./Hero.css";

import graph from '../assets/graph_home.jpg';

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={graph}  className="back-graph" />
       
        <div className="Hero_info">
          <h1>Origin Tech</h1>
          <p>Origin Tech is a startup company. Started by Mr. Shubham Omase to make innovative highly reliable and easy to use , electronics & electrical products in different domains for e.g. IOT , healthcare , domestic , industrial , education , agriculture , etc.</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
