import React from "react";
import "./TeslaBoard.css"
import Tesla_Board from "../assets/teslanewpng.png"
import Tesla_animation from "../assets/Tesla_animation.png"


function TeslaBoard(){
    return(
        <>
           <div className="tesla_board">
               <div className="Tesla_content">
                    <div className="Tesla_left">
                        <img src={Tesla_Board} />
                    </div>
                    <div className="Tesla_right">
                        <h1>Tesla Board</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                    </div>
               </div>
           </div>
        </>
    )
}


export default TeslaBoard 
