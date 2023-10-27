import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import curdmakerhome from '../assets/curdmakerhome.jpg'
import "./Product.css"

function CurdMakerHome() {
  return (
    <>
    <Navbar/>
    <div className="product">
      <div className="container">
      <div className="Card">
    <div className="product--cards">
          
            <div className="product--img">
            <img src={curdmakerhome} className="card--image" height="250px"/>
            </div>
            <div className='product--info'>
                <h3 className="product--name">CUED MAKER HOUSEHOLD</h3>
                {/* This curd maker offers you exciting features like tartness setting and mode setting. Its unique curd sensing mechanism allows you to set the tartness level of the curd to be formed with help of buttons.
                World’s first fully automatic Curd Maker
                 <li>Four different tartness levels can be set.</li>
                 <li> Automatic Audio and visual indication after curd formation according to set tartness level.</li>
                 <li>Automatic adjustment of time for curd formation according to quantity and tartness of culture (ferment) added in the milk.</li>
                 <li>Contains the world’s first low-cost curd sensing mechanism.</li>
                 <li>Three/Four modes of operations depending on the model chosen. A model with adulterate mode can detect harmful adulterants in the milk such as Urea, detergent, ammonium sulfate, and preservatives.</li>
                 <li>Approximately the same time of two and half hours for curd formation irrespective of change in ambient temperature due to seasonal changes.</li>
                 <li>Low power consumption.</li>
                 <li>Use of food-grade plastic.</li>
                 <li>Three patents have been filed on this product.</li> */}
                 <p>This curd maker offers you exciting features like tartness setting and mode setting. Its unique curd sensing mechanism allows you to set the tartness level of the curd to be formed with help of buttons.
                World's first fully automatic Curd Maker Four different tartness levels can be set.</p>
                <li>Four different tartness levels can be set.</li>
                 <li> Automatic Audio and visual indication after curd formation according to set tartness level.</li>
                 <li>Automatic adjustment of time for curd formation according to quantity and tartness of culture (ferment) added in the milk.</li>
                 <li>Contains the world’s first low-cost curd sensing mechanism.</li>
                 <li>Three/Four modes of operations depending on the model chosen. A model with adulterate mode can detect harmful adulterants in the milk such as Urea, detergent, ammonium sulfate, and preservatives.</li>
                 <li>Approximately the same time of two and half hours for curd formation irrespective of change in ambient temperature due to seasonal changes.</li>
                 <li>Low power consumption.</li>
                 <li>Use of food-grade plastic.</li>
                 <li>Three patents have been filed on this product.</li>

            </div>
        </div>
        </div>
        </div>
        </div>
    <Footer/>
    </>
  )
}

export default CurdMakerHome