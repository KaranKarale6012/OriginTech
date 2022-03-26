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
            {/* <div className="img--block">
                <img src={curdmakerhome} className="card--image"/>
            </div> */}
            <div className="product--info">
            <img src={curdmakerhome} className="card--image" height="250px"/>
                <h3 className="product--name">CUED MAKER HOUSEHOLD</h3>
                <h4>This curd maker offers you exciting features like tartness setting and mode setting. Its unique curd sensing mechanism allows you to set the tartness level of the curd to be formed with help of buttons.</h4>
                <h4>World’s first fully automatic Curd Maker</h4>
                 <h4><li>Four different tartness levels can be set.</li></h4>
                 <h4><li> Automatic Audio and visual indication after curd formation according to set tartness level.</li></h4>
                 <h4><li>Automatic adjustment of time for curd formation according to quantity and tartness of culture (ferment) added in the milk.</li></h4>
                 <h4><li>Contains the world’s first low-cost curd sensing mechanism.</li></h4>
                 <h4><li>Three/Four modes of operations depending on the model chosen. A model with adulterate mode can detect harmful adulterants in the milk such as Urea, detergent, ammonium sulfate, and preservatives.</li></h4>
                 <h4><li>Approximately the same time of two and half hours for curd formation irrespective of change in ambient temperature due to seasonal changes.</li></h4>
                 <h4><li>Low power consumption.</li></h4>
                 <h4><li>Use of food-grade plastic.</li></h4>
                 <h4><li>Three patents have been filed on this product.</li></h4>

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