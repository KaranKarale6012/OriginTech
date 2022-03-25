import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import header_shape from '../assets/header-shape.svg'
import './Hero.css'
// import homeproduct from "../assets/";
// import Product_shape from "../assets/Product_shape.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bell from '../assets/bell.jpg'
import curdmakercommercial from '../assets/curdmakercommercial.jpg'
import curdmakerhome from '../assets/curdmakerhome.jpg'
import intruder from '../assets/intruder.jpg'
import watercontroller from '../assets/watercontroller.jpg'
import occupancy from '../assets/occupancy.jpg'
import {useNavigate} from "react-router-dom";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  let history = useNavigate();
  return (
    <>
      <div className="slider">
        <div className="Home_product">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              1680: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={bell}  />
            </SwiperSlide>
            <SwiperSlide>
              <img src={curdmakercommercial}/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={curdmakerhome} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={intruder} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={watercontroller} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={occupancy} />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div className="Home_product-Content">
          <div className="Home_product_Info">
            <p>
            Here is a catalog for all our amazing products, you can click on the product to know more about it!
            </p>
          </div>
          <div className="Home_product-button">
            <button className="Home_product-Btn"
            onClick={()=>{
             history("/product") 
            }}
            >View All</button>
          </div>
          <div className="Home_product-img">
            {/* <img src={homeproduct} alt="" /> */}
          </div>
        </div>
        {/* <div className="Home_product-shape">
        <img src={Product_shape} />
      </div> */}
        <div className="hero-shape">
          <img src={header_shape} className="header_shape"/>
        </div>
      </div>
      
    </>
  );
}
