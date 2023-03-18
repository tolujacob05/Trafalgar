import React from "react";
import "./Services.css";
import Frame1 from "../../img/Frame1.png";
import Frame2 from "../../img/Frame2.png";
import Frame3 from "../../img/Frame3.png";
import Frame4 from "../../img/Frame4.png";
import Frame5 from "../../img/Frame5.png";
import Frame6 from "../../img/Frame6.png";


const Services = () => {
    return (
        <>
            <div className="div">
                <div className="services-section">
                    <div className="plans">
                        <img src={Frame1} alt=""/>
                        <span>Search doctor</span>
                        <span>Choose your doctor from thousands of specialist, general, and trusted hospitals</span>
                    </div>
                    <div className="plans">
                        <img src={Frame2} alt=""/>
                        <span>Online pharmacy</span>
                        <span>Buy your medicines with our mobile application with a simple delivery system</span>
                    </div>
                    <div className="plans">
                        <img src={Frame3} alt=""/>
                        <span>Consultation</span>
                        <span>Free consultation with our trusted doctors and get the best recomendations</span>
                    </div>
                    <div className="plans">
                        <img src={Frame4} alt=""/>
                        <span>Details info</span>
                        <span>Free consultation with our trusted doctors and get the best recomendations</span>
                    </div>
                    <div className="plans">
                        <img src={Frame5} alt=""/>
                        <span>Emergency care</span>
                        <span>You can get 24/7 urgent care for yourself or your children and your lovely family</span>
                    </div>
                    <div className="plans">
                        <img src={Frame6} alt=""/>
                        <span>Tracking</span>
                        <span>Track and save your medical history and health data</span>
                    </div>
                </div>
                <div className="services-btn">
                    <button>Learn more</button>
                </div>
            </div>
            
        </>
    )
}

export default Services;