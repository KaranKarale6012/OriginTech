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
            <div className="img--block">
                <img src={curdmakerhome} className="card--image"/>
            </div>
            <div className="product--info">
                <h3 className="product--name">CUED MAKER HOUSEHOLD</h3>
                <h4>This curd maker offers you exciting features like tartness setting and mode setting. Its unique curd sensing mechanism allows you to set the tartness level of the curd to be formed with help of buttons.</h4>
                <p>More Reliable</p>
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