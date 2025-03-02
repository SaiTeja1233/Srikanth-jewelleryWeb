import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";

function Contact() {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_phefvon",
                "template_cxjf05j",
                form.current,
                "n4B-Q0i6Fu8kNlw7_"
            )
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
                    setIsSent(true);
                    setLoading(false);
                    setTimeout(() => setIsSent(false), 5000);
                    form.current.reset();
                },
                (error) => {
                    console.error("Error:", error.text);
                    alert("Failed to send message. Please try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <div className="contact-form-container">
                    <form
                        className="contact-form"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <h2>Contact Us</h2>

                        {isSent && (
                            <p className="success-message">
                                Message sent successfully!
                            </p>
                        )}

                        <div className="input-group">
                            <input
                                required
                                autoComplete="off"
                                type="text"
                                name="user_name"
                                id="name"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="input-group">
                            <input
                                required
                                autoComplete="off"
                                name="user_email"
                                type="email"
                                id="email"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="input-group">
                            <textarea
                                required
                                cols="30"
                                rows="8"
                                name="message"
                                id="message"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <div className="button">
                            <button type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Send Message →"}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="map-container">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.457179528679!2d81.840701!3d16.478491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a373a39b5d18c47%3A0x3029b7b4c2a6a978!2s16.4784910%2C%2081.8407010!5e0!3m2!1sen!2sin!4v1707840565489!5m2!1sen!2sin"
                        width="100%"
                        height="520"
                        style={{ border: "0" }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="social-main">
                <div className="social-contact">
                    {/* <div className="social-icon">
                        <h1>Chat us on</h1>
                        <a href="">
                            <i class="bi bi-whatsapp"></i>
                        </a>
                    </div>
                    <div className="social-icon-email">
                        <h1>Mail us on</h1>
                        <a href="">
                            <i class="bi bi-envelope-at"></i>
                        </a>
                    </div>
                    <div className="social-icon">
                        <h1>Follow us on</h1>
                        <a href="">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
