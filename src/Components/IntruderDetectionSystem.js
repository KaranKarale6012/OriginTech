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
     
            <div className="product--info">
            <img src={intruder} className="card--image" height="250px"/>
                <h1 className="product--name">Intruder Detection System</h1>
                <h4>We have developed a special model for apartments and housing societies were there security check post at the common entry point. Useful in Societies, apartments where common security is available. The specially developed unit shown below is to be installed in the security cabin.</h4>
                <h4>The system at the security cabin gives an indication of intrusion in any flat in the apartment on the display and beeps sound alarm. Security personal in the cabin can take appropriate action to save valuable items being stolen by thieves in that particular flat or house.</h4>
                <h4>The all-guard security system installed in different flats of the apartment sends alerts to the flat owner as well as to the system installed at the security cabin.</h4>
                <h4>Features of the system are as follows</h4>
                <h4><li>Use of special Master Unit at Security Cabin.</li></h4>
                <h4><li>Produces beep on detection of intrusion in any flat.</li></h4>
                <h4><li>Real time indication of flat number on the display in which intrusion is detected.</li></h4>
                <h4><li>One unit covers 89 flats</li></h4>
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