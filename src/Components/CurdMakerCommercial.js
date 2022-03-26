import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import curdmakercommercial from '../assets/curdmakercommercial.jpg'
import "./Product.css"

function CurdMakerCommercial() {
  return (
      <>
    <Navbar/>
    <div className="product">
      <div className="container">
      <div className="Card">
    <div className="product--cards">
            {/* <div className="img--block">
                
            </div> */}

            <div className="product--info">
            <img src={curdmakercommercial} className="card--image" height="250px"/>
                <h3 className="product--name">CURD MAKERS COMMERCIAL</h3>
                <h4>This curd maker offers you exciting features like tartness setting and mode setting. Its unique curd sensing mechanism allows you to set the tartness level of the curd to be formed with help of buttons.</h4>
                <p>More Reliable</p>
                <h4>
                This curd maker offers you exciting features like tartness setting and mode setting. Its unique curd sensing mechanism allows you to set the tartness level of the curd to be formed with help of buttons.
                </h4>
                <h4>It also provides automatic audio and visual indication after curd formation. It is designed in a fashionable way with ergonomic considerations. According to Ayurveda, Curd of adequate tartness is considered beneficial for health.</h4>
                <h4>Consumption of too much sour curd usually causes acidity and stomach upset. According to Ayurveda incompletely formed curd is heavy to digest and may create skin and other disorders.</h4>
                <h4>The curd makers available on the market are not automatic and they don’t have provision to control the tartness of the curd to be formed. By using Anand Automatic Curd maker, the user can prepare curd with the required tartness resulting in health benefits.</h4>
            </div>
        </div>
        </div>
        </div>
        </div>
    <Footer/>
    </>
  )
}

export default CurdMakerCommercial