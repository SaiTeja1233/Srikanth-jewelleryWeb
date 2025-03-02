import React, { useEffect } from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Scrollpic from "./Scrollpic";

function Home() {
    useEffect(() => {
        const videos = document.querySelectorAll(".hover-video");

        videos.forEach((video) => {
            video.addEventListener("mouseenter", () => video.play());
            video.addEventListener("mouseleave", () => video.pause());
        });
    }, []);
    return (
        <div className="main_container">
            <div className="Container1">
                <div className="homeimgTop">
                    <h1 className="homeimgTop_text">
                        Exquisite Jewelry Sets for Every Occasion
                    </h1>
                    <p className="homeimgTop_text2">
                        Grace in every sparkle, elegance in every piece. Adorn
                        yourself with timeless beauty.
                    </p>
                    <button className="home_shopnowBtn">
                        shop now <i className="bi bi-arrow-bar-right"></i>
                    </button>
                </div>
                <div className="image1Cont">
                    <img
                        src="homeimg1.png "
                        className="homeimg1"
                        alt="homeimg1"
                    />
                </div>
            </div>
            <div className="Container2">
                <Scrollpic/>
            </div>
            <div className="Container3">
                <h1>NEW COLLECTION</h1>
                <div className="main_container3">
                    <div className="video1_2_text_container3">
                        <div className="video1">
                            <video
                                className="hover-video"
                                muted
                                loop
                                playsInline
                            >
                                <source src="video1.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="video2_txet">
                            <div className="video1_text">
                                <h1>Where luxury meets craftsmanship</h1>
                                <p>explore our latest gold collection</p>
                                <button className="shop_nowBtn">
                                    Explore Now
                                </button>
                            </div>
                            <div className="video2">
                                <video
                                    className="hover-video"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="video2.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="video3_4_text_container3">
                        <div className="video2_txet">
                            <div className="video1_text">
                                <h1>Golden moments, golden memories</h1>
                                <p> find your perfect piece today</p>
                            </div>
                            <div className="video4">
                                <video
                                    className="hover-video"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="video4.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="video1">
                            <video
                                className="hover-video"
                                muted
                                loop
                                playsInline
                            >
                                <source src="video5.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <div className="exploreBtn-con">
                        <button className="exploreBtn">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="Container4">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
