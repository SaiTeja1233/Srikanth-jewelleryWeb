import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="Footer_logo">
                    <img src="logopng.png" alt="Joice Jewelry" />
                    <div className="Footer-logo-text">
                        <div className="shine">Srikanth</div>
                        <div className="Footerlogoname">Jewellery Work's</div>
                    </div>
                    <p>
                        Unleash the radiance of your inner beauty with our
                        premium jewelry brand - a perfect blend of
                        sophistication and style.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-section">
                        <h3>ACCOUNT</h3>
                        <ul>
                            <li>Dashboard</li>
                            <li>Orders</li>
                            <li>Wishlist</li>
                            <li>Addresses</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>CATALOG</h3>
                        <ul>
                            <li>Shop by category</li>
                            <li>Shop by brand</li>
                            <li>Promotions</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>HELP</h3>
                        <ul>
                            <li>Features</li>
                            <li>FAQ</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>CONTACT US</h3>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> 7031 N
                            35th Ave, Phoenix, Arkansas, USA
                        </p>
                        <p>
                            <i className="fas fa-phone"></i> Call us 8 AM - 10
                            PM: 6668 5555 8464
                        </p>
                        <div className="social-icons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-telegram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
