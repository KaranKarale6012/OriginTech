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
                <h4>Features:</h4>
                <h4><li>Different features can be controlled using a mobile phone.</li></h4>
                <h4><li>Motor at slave unit is automatically turned off by sending SMS(or dialing number) automatically when the tank is full by Master.</li></h4>
                <h4><li>Motor at slave unit is automatically turned ON by sending SMS(or dialing number) automatically when the tank is empty by Master.</li></h4>
                <h4><li>Six registered operators can check the water level in ESR by sending SMS or by dialing the Master unit.</li></h4>
                <h4><li>Detection of Dry run condition: Motor is automatically switched off when running dry and notification is sent to operators by SMS.</li></h4>
                <h4><li>Detection of single phasing: Motor is automatically switched off when three-phase supply is improper and notification is sent to operators by SMS.</li></h4>
                <h4><li>Motor at the slave site can also be controlled by six operators through cell phones.</li></h4>
                <h4><li>Password Protection: 6 registered operators can control both units.</li></h4>
                <h4><li>Motor at the slave unit can also be turned ON for a specific interval of time through mobile phone.</li></h4>
                <h4><li>Both Master and Slave units can be controlled using a mobile phone.</li></h4>
                <h4><li>Switching capacity of slave unit: It can control any three-phase motor from 1 HP to 1000 HP.</li></h4>
                <h4><li>It can also control a single-phase motor of any capacity.</li></h4>
                <h4><li>Fully automatic, no manpower is needed.</li></h4>
                <h4><li>Zero wastage of water and electricity due to tank overflow.</li></h4>
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