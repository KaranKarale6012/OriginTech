import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import bell from '../assets/bell.jpg'
import "./Product.css"

function Bell_Product() {
  return (
    <>
      <Navbar/>
      <div className="product">
      <div className="container">
      <div className="Card">
      <div className="product--cards">
            <div className="img--block">
                <img src={bell} className="card--image"/>
            </div>
            <div className="product--info">
                <h3 className="product--name">BELL</h3>
                <h4>Programmable Ringing Bell for Schools and Colleges</h4>
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

export default Bell_Product