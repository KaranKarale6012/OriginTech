import React from "react";
import "./Hero.css";
import Video from "../assets/bg.mp4";
import Mob_back from "../assets/mobile_back.mp4";
import header_shape from '../assets/header-shape.svg'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-video">
          <video
            muted
            loop="true"
            autoplay="autoplay"
            controls="controls"
            id="background-video"
          >
            <source src={Video} type="video/mp4" />
          </video>
          <video
            muted
            loop="true"
            autoplay="autoplay"
            controls="controls"
            id="mob_background-video"
          >
            <source src={Mob_back} type="video/mp4" />
          </video>
        </div>

       
        <div className="hero-shape">
          <img src={header_shape} className="header_shape"/>
        </div>
        <div className="Hero_info">
          <h1>Origin Tech</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
