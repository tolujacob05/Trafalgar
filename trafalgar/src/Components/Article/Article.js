import React from "react";
import Dots from "../Dots/Dots";
import "./Article.css"
import image2 from "../../img/image2.png";
import image3 from "../../img/image3.png";
import image4 from "../../img/image4.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";

const Article = () => {
    return (
        <>
            <div className="article-container">
                
                <div className="article-section">
                    <div className="content-head">
                        <span>Check out our latest article</span>
                        <div className="hr2"></div>
                    </div>
                    <div className="dot5">
                        <Dots />
                    </div>
                    <div className="article-grid">
                        <div className="section1">
                            <div className="article-img">
                                <img src={image2} alt="" />
                            </div>
                            <div className="article-heads">
                                <span>Disease detection, check 
                                    up in the laboratory
                                </span>
                                <span>
                                    In this case, the role of the health laboratory is very important to do
                                    a disease detection...
                                </span>
                                <div className="read-more">
                                    <span>Read more</span>
                                    <img src={Vector3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="section1">
                            <div className="article-img">
                                <img src={image3} alt="" />
                            </div>
                            <div className="article-heads">
                                <span>Herbal medicines that are safe for consumption</span>
                                <span>
                                    Herbal medicine is very widely used at this time because of its very good for your health...
                                </span>
                                <div className="read-more">
                                    <span>Read more</span>
                                    <img src={Vector3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="section1">
                            <div className="article-img">
                                <img src={image4} alt="" />
                            </div>
                            <div className="article-heads">
                                <span>Natural care for healthy 
                                    facial skin
                                </span>
                                <span>
                                    A healthy lifestyle should start from now and also for your skin health.
                                    There are some...
                                </span>
                                <div className="read-more">
                                    <span>Read more</span>
                                    <img src={Vector3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-button">
                        <button>View all</button>
                    </div>
                </div>
                <img src={Vector2} alt="" />
            </div>
        </>
    )
}

export default Article;