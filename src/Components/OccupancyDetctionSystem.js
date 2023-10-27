import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import "./Product.css"
import occupancy from '../assets/occupancy.jpg'

function OccupancyDetctionSystem() {
  return (
    <>
    <Navbar/>
    <div className="product">
      <div className="container">
      <div className="Card">
      <div className="product--cards">
            <div className="img--block">
                <img src={occupancy} className="card--image"/>
            </div>
            <div className="product--info">
                <h3 className="product--name">Occupancy Detection System</h3>
                <h4>The entire circuit of the motion sensors is developed by me and is distinctly different from other motion sensors available in the market. The range of PIR motion sensor available in the market is limited to 25 to 35 feet</h4>
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

export default OccupancyDetctionSystem