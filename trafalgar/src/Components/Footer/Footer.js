import React from "react";
import Dots from "../Dots/Dots";
import "./Footer.css"
import T from "../../img/T.png";
import T2 from "../../img/T2.png";


const Footer = () => {
    return (
        <>
            
            <footer className="footer">
                <div className="dot-a">
                    <Dots />
                </div>
                <div className="footer-container">
                    <div className="footer-comp">
                        <div className="footer-img">
                            <img src={T2} alt=""/>
                            <img src={T} alt=""/>
                        </div>
                        <span>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
                        for everyone</span>
                        <span>©Trafalgar PTY LTD 2020. All rights reserved</span>
                    </div>
                    {/* <div className="footer-links"> */}
                        <div className="footer-company">
                            <span>Company</span>
                            <ul>
                                <li><a href="/#">About</a></li>
                                <li><a href="/#">Testimonials</a></li>
                                <li><a href="/#">Find a doctor</a></li>
                                <li><a href="/#">Apps</a></li>
                            </ul>
                        </div>
                        <div className="footer-company">
                            <span>Region</span>
                            <ul>
                                <li><a href="/#">Indonesia</a></li>
                                <li><a href="/#">Singapore</a></li>
                                <li><a href="/#">Hongkong</a></li>
                                <li><a href="/#">Canada</a></li>
                            </ul>
                        </div>
                        <div className="footer-company">
                            <span>Help</span>
                            <ul>
                                <li><a href="/#">Help center</a></li>
                                <li><a href="/#">Contact support</a></li>
                                <li><a href="/#">Instructions</a></li>
                                <li><a href="/#">How it works</a></li>
                            </ul>
                        </div>
                    </div>
                {/* </div> */}
                <div className="dot-b">
                    <Dots />
                </div>
            </footer>
        </>
    )
}

export default Footer;