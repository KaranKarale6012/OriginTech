import React,{useEffect} from "react";
import "./Hero.css";
import Video from "../assets/bg.mp4";
import Mob_back from "../assets/mobile_back.mp4";
import header_shape from '../assets/header-shape.svg';

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
      </div>
    </>
  );
};

export default Hero;
