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
            <div className="img--block">
                <img src={curdmakercommercial} className="card--image"/>
            </div>
            <div className="product--info">
                <h3 className="product--name">CURD MAKERS COMMERCIAL</h3>
                <h4>This curd maker offers you exciting features like tartness setting and mode setting. Its unique curd sensing mechanism allows you to set the tartness level of the curd to be formed with help of buttons.</h4>
                <p>More Reliable</p>
                <button className="btn--secondary">Explore More</button>
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