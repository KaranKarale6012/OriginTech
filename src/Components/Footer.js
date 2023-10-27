import React from "react";
import Box from "../assets/Box.png"
import Flogo from "../assets/Flogo.png"
import Facebook from "../assets/facebook.png"
import Twitter from "../assets/twitter.png"
import Linkedln from "../assets/linkedln.png"
import Pintrest from "../assets/pintrest.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-main">
                <div className="Footer_items">
                    <div className="Footer_links">
                        <div className="Footer_Logo">
                            <img src={Flogo} className="Flogo" alt="" />

                        </div>
                        <div className="Footer-list">
                            <p>Rajarambapu Institute of Technology, Rajaramnagar  </p>
                            
                        </div>
                    </div>
                    <div className="Footer_media1">
                        {/* <div className="Footer_header">
                            <h3>FOLLOW US</h3>
                        </div> */}
                        <ul className="Footer-list1">
                            <li> <a href="/TeslaBoard"> HOME</a> </li>
                            <li> <a href="/product">PRODUCT </a></li>
                            <li> <a href="/contact">CONTACT US</a></li>
                            {/* <li> <a href="#"><img src={Pintrest} alt="" /></a></li> */}
                        </ul>
                    </div>
                    <div className="Footer_media">
                        <div className="Footer_header">
                            <h3>FOLLOW US</h3>
                        </div>
                        <ul className="Footer-list">
                            <li> <a href="#"> <img src={Facebook} alt="" /></a> </li>
                            <li> <a href="#"><img src={Twitter} alt="" /></a></li>
                            <li> <a href="#"><img src={Linkedln} alt="" /></a></li>
                            <li> <a href="#"><img src={Pintrest} alt="" /></a></li>
                        </ul>
                    </div>
                    {/* <div className="Footer_contact">
                        <div className="Footer_header">
                            <h3>NEWSLETTER</h3>
                        </div>
                        <div className="Footer-list">
                            <img src={Box} className="Box" alt="" />
                        </div>
                    </div> */}
                </div>
                <span className="Footer_hr">
                    <hr />
                    <p> all rights reserved <span className="copy">&copy;</span> by Horkrux Software Solution </p>
                </span>
            </div>
        </div>
    )
}


export default Footer