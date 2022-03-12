import React from "react";
import "./Status.css";

import Location from "../assets/Icon.png";
import Mail from "../assets/Mail.png";
import Call from "../assets/Call.png";
function Status() {
  return (
    <div className="Status">
      <div className="Status_heading">
        <hr />
        <h2>Get In Touch </h2>
        <hr />
      </div>
      <div className="Status_info">
        <div className="Status_left">
          <h4>For Any Question And Suggestion</h4>
          <div className="Status-img">
            <img src={Location} alt="" />
            <div>
              <h5> Origin tech </h5>
              <p>
                {" "}
                K.E Society's Rajarambapu Institute of Technology, Islampur.
                Taluka:- Walwa, Dist:- Sangli-415414
              </p>
            </div>
          </div>
          <div className="Status-img">
            <img src={Mail} alt="" />
            <div>
              <h5> Email </h5>
              <p> Shubhamomase@gmail.com</p>
            </div>
          </div>
          <div className="Status-img">
            <img src={Call} alt="" />
            <div>
              <h5> Call Us </h5>
              <p>+91 9822372117</p>
            </div>
          </div>
        </div>
        <div className="Status_right">
       </div>
      </div>
    </div>
  );
}

export default Status;
