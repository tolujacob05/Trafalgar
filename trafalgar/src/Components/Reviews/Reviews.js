import React from "react";
// import swiper react
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import requred module
import { FreeMode, Pagination } from "swiper";

import "./Reviews.css";

import image1 from "../../img/image1.png";
import ColumnDots from "../ColumnDots/ColumnDots"

const Reviews = () => {
    return (
        <>
            <div className="swiper-content">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="swiper"
                >
                    
                    <SwiperSlide>
                        <div className="review-heading">
                            <span>What our customer are saying</span>
                            <div className="horizontal"></div>
                        </div>
                        <div className="review-section">
                            <div className="review-img">
                                <div className="review-pic">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="review-details">
                                    <span>Edward Newgate</span>
                                    <span>Founder Circle</span>
                                </div>
                            </div>
                            <div className="comment">
                                <span>“Our dedicated patient engagement app and 
                                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                                    or administrative hassle) and securely”
                                </span>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="review-heading">
                            <span>What our customer are saying</span>
                            <div className="horizontal"></div>
                        </div>
                        <div className="review-section">
                            <div className="review-img">
                                <div className="review-pic">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="review-details">
                                    <span>Edward Newgate</span>
                                    <span>Founder Circle</span>
                                </div>
                            </div>
                            <div className="comment">
                                <span>“Our dedicated patient engagement app and 
                                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                                    or administrative hassle) and securely”
                                </span>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="review-heading">
                            <span>What our customer are saying</span>
                            <div className="horizontal"></div>
                        </div>
                        <div className="review-section">
                            <div className="review-img">
                                <div className="review-pic">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="review-details">
                                    <span>Edward Newgate</span>
                                    <span>Founder Circle</span>
                                </div>
                            </div>
                            <div className="comment">
                                <span>“Our dedicated patient engagement app and 
                                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                                    or administrative hassle) and securely”
                                </span>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="review-heading">
                            <span>What our customer are saying</span>
                            <div className="horizontal"></div>
                        </div>
                        <div className="review-section">
                            <div className="review-img">
                                <div className="review-pic">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="review-details">
                                    <span>Edward Newgate</span>
                                    <span>Founder Circle</span>
                                </div>
                            </div>
                            <div className="comment">
                                <span>“Our dedicated patient engagement app and 
                                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                                    or administrative hassle) and securely”
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="c-dot2">
                        <ColumnDots />
                    </div>
                </Swiper>
                    <div className="c-dot3">
                        <ColumnDots />
                    </div>
            </div>
        </>
    )
}

export default Reviews;