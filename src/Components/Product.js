import React, { useState } from "react";
import sanitizer from "../assets/sanitizer.png";
import bell from "../assets/bell.jpg";
import curdmakercommercial from "../assets/curdmakercommercial.jpg";
import curdmakerhome from "../assets/curdmakerhome.jpg";
import intruder from "../assets/intruder.jpg";
import watercontroller from "../assets/watercontroller.jpg";
import occupancy from "../assets/occupancy.jpg";
import "./Product.css";
import Bell_Product from "./Bell_Product";
import { useNavigate } from "react-router-dom";

function Product() {
  let history = useNavigate();
  const handle_Bell = () => {
    history("/product/bell");
  };
  return (
    <div className="product">
      <div className="container">
        <div className="Product--heading">
          <hr />
          <h2>Our Main Products</h2>
          <hr />
        </div>

        <div className="Product--subheading">
          <p>
            Here is a catalog for all our amazing products, you can click on the
            product to know more about it!
          </p>
        </div>

        <div className="Card">
          <div
            className="product--cards"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="img--block">
              <img src={bell} className="card--image" />
            </div>
            <div className="product--info">
              <h3 className="product--name">BELL</h3>
              <h4>Programmable Ringing Bell for Schools and Colleges</h4>
              <p>More Reliable</p>
              <button className="btn--secondary" onClick={handle_Bell}>
                Explore More
              </button>
            </div>
          </div>
          <div
            className="product--cards"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="img--block">
              <img src={curdmakercommercial} className="card--image" />
            </div>
            <div className="product--info">
              <h3 className="product--name">CURD MAKERS COMMERCIAL</h3>
              <h4>
                This curd maker offers you exciting features like tartness
                setting and mode setting. Its unique curd sensing mechanism
                allows you to set the tartness level of the curd to be formed
                with help of buttons.
              </h4>
              <p>More Reliable</p>
              <button
                className="btn--secondary"
                onClick={() => {
                  history("/product/curdMakerCommerical");
                }}
              >
                Explore More
              </button>
            </div>
          </div>
          <div
            className="product--cards"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="img--block">
              <img src={curdmakerhome} className="card--image" />
            </div>
            <div className="product--info">
              <h3 className="product--name">CUED MAKER HOUSEHOLD</h3>
              <h4>
                This curd maker offers you exciting features like tartness
                setting and mode setting. Its unique curd sensing mechanism
                allows you to set the tartness level of the curd to be formed
                with help of buttons.
              </h4>
              <p>More Reliable</p>
              <button
                className="btn--secondary"
                onClick={() => {
                  history("/product/curdMakerHouseHold");
                }}
              >
                Explore More
              </button>
            </div>
          </div>
          <div
            className="product--cards"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="img--block">
              <img src={intruder} className="card--image" />
            </div>
            <div className="product--info">
              <h3 className="product--name">Intruder Detection System</h3>
              <h4>
                We have developed a special model for apartments and housing
                societies were there security check post at the common entry
                point. Useful in Societies, apartments where common security is
                available. The specially developed unit shown below is to be
                installed in the security cabin.
              </h4>
              <p>More Reliable</p>
              <button
                className="btn--secondary"
                onClick={() => {
                  history("/product/intruderDetectionSystem");
                }}
              >
                Explore More
              </button>
            </div>
          </div>
          <div
            className="product--cards"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="img--block">
              <img src={watercontroller} className="card--image" />
            </div>
            <div className="product--info">
              <h3 className="product--name">Water Level Controller</h3>
              <h4>
                This model is useful where the Distance between the water pump
                and the overhead water tank is very large (200 meters to several
                kilometers). In many organizations, overhead water tanks and
                water pumps are far away from each other. GSM based wireless
                water level control system is extremely useful for such
                conditions.
              </h4>
              <p>More Reliable</p>
              <button
                className="btn--secondary"
                onClick={() => {
                  history("/product/waterLevelController");
                }}
              >
                Explore More
              </button>
            </div>
          </div>
          <div
            className="product--cards"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="img--block">
              <img src={occupancy} className="card--image" />
            </div>
            <div className="product--info">
              <h3 className="product--name">Occupancy Detection System</h3>
              <h4>
                The entire circuit of the motion sensors is developed by me and
                is distinctly different from other motion sensors available in
                the market. The range of PIR motion sensor available in the
                market is limited to 25 to 35 feet
              </h4>
              <p>More Reliable</p>
              <button
                className="btn--secondary"
                onClick={() => {
                  history("/product/occupancyDetectionSystem");
                }}
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
