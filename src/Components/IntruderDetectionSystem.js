import React from 'react'
import intruder from '../assets/intruder.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import "./Product.css"

function IntruderDetectionSystem() {
  return (
    <>
    <Navbar/>
    <div className="product">
      <div className="container">
      <div className="Card">
      <div className="product--cards">
            <div className="img--block">
                <img src={intruder} className="card--image"/>
            </div>
            <div className="product--info">
                <h3 className="product--name">Intruder Detection System</h3>
                <h4>We have developed a special model for apartments and housing societies were there security check post at the common entry point. Useful in Societies, apartments where common security is available. The specially developed unit shown below is to be installed in the security cabin.</h4>
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

export default IntruderDetectionSystem