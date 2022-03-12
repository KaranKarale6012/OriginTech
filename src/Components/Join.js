import react from "react";
import "./Join.css"
import Card from "../Components/Card";
import app_dev from "../assets/app-dev.png";
import web_design from "../assets/web-design.png";
import UI_UX_design from "../assets/graphic-design.png";
import IOS_dev from "../assets/app-dev.png";

function Join() {
    return (
        <>
            <div className="Join">

                <div className="Join_heading">
                    <hr />
                    <h2> Our Services </h2>
                    <hr />
                </div>
                <div className="Join_para">
                    <p>From fully managed teams to individual expert software developers, we specialize in solid end-to-end delivery
                        <span className="Join_para-2"> of tailor-made technology solutions for startups, SMBs, and enterprises.</span></p>
                </div>
                <div className="Card">
                    <Card 
                    image={UI_UX_design}
                    service="Website Development"/>
                    <Card  
                    image={UI_UX_design}
                    service="Android Development"/>
                    <Card  
                    image={UI_UX_design}
                    service="UX-UX Design"/>
                    <Card  
                    image={UI_UX_design}
                    service="IOS Development"/>
                </div>
            </div>

        </>

    )

}

export default Join