import React from "react";
// import sky from '../../assets/ReusableImages/sky.png'
import challenge from "../assets/challenge.png";
import anandkakade from '../assets/anandkakade.png'
import RandhirPatil from "../assets/RandhirPatil.png"
import ShubhamOmase from '../assets/ShubhamOmase.jpg'
import program from "../assets/Program.png";
import careers from "../assets/career.png";
import Shape3 from "../assets/shape 3.png";
import Shape4 from "../assets/shape 4.png";
import Shape6 from "../assets/shape 6.png";
import Shape7 from "../assets/shape 7.png";
import Shape9 from "../assets/shape 9.png";

import "./Announcement.css";

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <div className="Announcement_heading">
          <hr />
          <h2>Meet Our Team </h2>
          <hr />
        </div>
        <div className="card">
          <div className="card--wrapper">
            <div className="card--main">
              <img src={anandkakade} className="card--image" />
              <h4>Dr.Anand Kakade</h4>
              <p>
              Dr Anand has received his M.Tech and PhD from "Indian Institute of Technology, Kharagpur."

              His expertise is in RF and Microwave, Analog Signal Processing and Embedded Systems. He has over 10 Years of experience in product development. He is known for his innovative ideas.

              </p>
              <div className="btn-group">
                  <a href="#" className="btn--primary">Read More</a>
              </div>
            </div>
            <div className="card--main">
              <img src={ShubhamOmase} className="card--image" />
              <h4>Mr. Shubham Omase</h4>
              <p>
              Mr Shubham is business partner at Anand Techno Creations, his expertise is in Embedded Systems, IoT, Android Development, Cloud side Management and System architecture design. Mr Shubham is known for his innovative solutions.
              </p>
              <div className="btn-group">
                  <a href="#" className="btn--primary">Read More</a>
              </div>
            </div>
            <div className="card--main">
              <img src={RandhirPatil} className="card--image" />
              <h4>Mr. Randhir J. Patil</h4>
              <p>
              Mr Randhir has received his M.Tech in Electronics. His expertise is in Strategic planning and Management. Randhir is known for his analytical skills and creative ideas for marketing. He has over 5 years of experience in this field.
              </p>
              <div className="btn-group">
                  <a href="#" className="btn--primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Shapes">
          <img src={Shape3} className="shape3" />
          <img src={Shape4} className="shape4" />
          <img src={Shape6} className="shape6" />
          <img src={Shape7} className="shape7" />
          <img src={Shape9} className="shape9" />
        </div>
      </div>
      {/* <img src={sky} className='sky' /> */}
    </div>
  );
}

export default Announcement;
