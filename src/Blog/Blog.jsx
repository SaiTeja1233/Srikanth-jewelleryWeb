import React from "react";
import "./Blog.css";
import Footer from "../Footer/Footer";

function Blog() {
    return (
        <div className="Blog-container">
            <div className="blog-section1">
                <div className="blog-img1">
                    <img src="blogImg.jpg" alt="Handmade Jewellery" />
                    <div className="overlay">
                        <h1>
                            "Every piece tells a story, Crafted by hand,
                            Cherished forever"
                        </h1>
                        <p>Srikanth Jewellery Work's</p>
                    </div>
                </div>
            </div>
            <div className="blog-section2">
                <div className="blog-section2-text">
                    <h1>
                        From molten gold to magnificent jewelry, we craft
                        brilliance
                    </h1>
                    <div className="blog-line"></div>
                </div>
                <div className="blog-section2-cards">
                    <div className="blog-card1">
                        <div className="blog-card-img1">
                            <img src="blogimg2.jpg" alt="" />
                        </div>
                        <div className="blog-card-text">
                            <h3>Gold melts, artistry begins</h3>
                            <p>
                                We melt gold with fire and skill, Shaping its
                                form with artful will. From molten streams, new
                                beauty grows, A timeless craft that truly glows.
                                Gold transforms as passion flows.
                            </p>
                        </div>
                    </div>
                    <div className="blog-card2">
                        <div className="blog-card-img1">
                            <img src="blogimg3.jpg" alt="" />
                        </div>
                        <div className="blog-card-text">
                            <h3>We hammer gold, forging brilliance</h3>
                            <p>
                                We melt gold with fire and skill, Shaping its
                                form with artful will. From molten streams, new
                                beauty grows, A timeless craft that truly glows.
                                Gold transforms as passion flows.
                            </p>
                        </div>
                    </div>
                    <div className="blog-card3">
                        <div className="blog-card-img1">
                            <img src="blogimg4.jpg" alt="" />
                        </div>
                        <div className="blog-card-text">
                            <h3>With precision, we handcraft gold into art</h3>
                            <p>
                                We shape gold by hand with care, Crafting beauty
                                beyond compare. Every curve, a touch of art, A
                                masterpiece right from the heart. Handmade gold,
                                timeless and rare
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-section3">
                <div className="blog-section3-img">
                    <img src="collectionsImg.jpg" alt="" />
                </div>
                <div className="blog-section3-text">
                    <h1>Handcrafted Elegance in Every Detail</h1>
                    <p>
                        Discover the timeless beauty of handmade gold jewelry,
                        where tradition meets artistry. Each piece is
                        meticulously crafted by skilled artisans, blending
                        heritage techniques with contemporary designs to create
                        jewelry that is as unique as you. From delicate everyday
                        essentials to statement heirlooms, our collection
                        celebrates the richness of gold in its purest form.
                        Whether you're marking a special occasion or simply
                        indulging in luxury, our handcrafted creations ensure
                        that every moment shines with elegance. Experience the
                        warmth, brilliance, and craftsmanship of gold jewelry
                        made just for you.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
