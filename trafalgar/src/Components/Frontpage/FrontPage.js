import React from "react";
import "./FrontPage.css";
import trafalgar1 from "../../img/trafalgar1.png";
import Vector from "../../img/Vector.png";
import Services from "../Services/Services";


const FrontPage = () => {
    return (
        <>
            <section className="frontpage">
                <div className="vitrual">
                    <div className="heading1">
                        <h3>Virtual healthcare
                        for you</h3>
                    </div>
                    <div className="para">
                        <p>Trafalgar provides progressive, and affordable
                        healthcare, accesible on mobile and online
                        for everyone</p>
                    </div>
                    <div className="button">
                        <button>Consult today</button>
                    </div>
                </div>
                <div className="img1">  
                    <img src={trafalgar1} alt=""/>
                </div>
            </section>

            <section className="services">
                <div className="services-heading">
                    <h1>Our services</h1>
                    <hr />
                    <p>We provide to you the best choices for you. adjust it to yoir health needs and makesure you undergo treatment
                        with our highly qualified doctors you can consult with us which typeof service is suitable for your health.
                    </p>
                </div>
                <div className="services-details">
                    <div className="services-vector">
                        <img src={Vector} alt=""/>
                    </div>
                </div>
                <Services />
            </section>
        </>
    )
}

export default FrontPage;