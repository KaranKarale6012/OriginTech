import react from "react";
import HeroBack_Video from "../assets/HeroBack_video.mp4"
import "./ProductHero.css"

function ProductHero() {
    return(
        <div className="productHero">
        <div className="productHero-video">
            <video muted
                loop="true"
                autoplay="autoplay"
                controls="controls"
                id="background-video"
                >                  
                <source src={HeroBack_Video} type="video/mp4" />
            </video>
            </div>
            </div>
    )
}


export default ProductHero