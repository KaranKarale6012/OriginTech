import React from "react";
import "./Card.css";

import App from "../App";
function Card(props) {
    return (
        
            <div class="card">
                <div>
                    <img src={props.image} alt="" />
                </div>
                <div class="card_service">
                    <h4><b>{props.service}</b></h4>
                </div>
            </div>
        
    )
}

export default Card