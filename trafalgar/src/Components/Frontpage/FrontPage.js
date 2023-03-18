import React from "react";
import "./FrontPage.css";
import trafalgar1 from "../../img/trafalgar1.png";
import trafalgar2 from "../../img/trafalgar2.png";
import trafalgar3 from "../../img/trafalgar3.png";
import Vector from "../../img/Vector.png";
import Services from "../Services/Services";
import ColumnDots from "../ColumnDots/ColumnDots"
import Reviews from "../Reviews/Reviews";
import Article from "../Article/Article";


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

            <section className="healthcare">
                <div >
                    <div className="healthcare-provider">
                        <img src={trafalgar3} alt=""/>
                        <div className="providers">
                            <span>Leading healthcare providers</span>
                            <hr />
                            <span>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                                in the solutions we deliver
                            </span>
                            <span>
                                <button>Learn more</button>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="c-dots">
                <ColumnDots />
            </div>
            <section>
                <div className="healthcare-provider">
                    <div className="providers">
                        <span>Download our mobile apps</span>
                        <hr />
                        <span>Our dedicated patient engagement app and 
                            web portal allow you to access information instantaneously (no tedeous form, long calls, 
                            or administrative hassle) and securely
                        </span>
                        <span>
                            <button>Learn more</button>
                        </span>
                    </div>
                    <img src={trafalgar2} alt=""/>
                </div>
            </section>

            <section>
                <Reviews />
            </section>

            <div>
            <Article />
            </div>
        </>
    )
}

export default FrontPage;