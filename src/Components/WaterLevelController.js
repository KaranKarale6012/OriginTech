import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import watercontroller from '../assets/watercontroller.jpg'
import "./Product.css"

function WaterLevelController() {
  return (
    <>
    <Navbar/>
    <div className="product">
      <div className="container">
      <div className="Card">
      <div className="product--cards">
            <div className="img--block">
                <img src={watercontroller} className="card--image"/>
            </div>
            <div className="product--info">
                <h3 className="product--name">Water Level Controller</h3>
                <h4>This model is useful where the Distance between the water pump and the overhead water tank is very large (200 meters to several kilometers). In many organizations, overhead water tanks and water pumps are far away from each other. GSM based wireless water level control system is extremely useful for such conditions.</h4>
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

export default WaterLevelController