import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Scrollpic.css";

const Scrollpic = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 786);
    const scrollRef = useRef(null);
    const navigate = useNavigate(); // Initialize navigation

    const images = [
        { src: "necklace-jewel-svgrepo-com.svg", name: "Necklace" },
        { src: "gem-chain-svgrepo-com.svg", name: "Chain" },
        { src: "wedding-rings-wedding-svgrepo-com.svg", name: "Wedding Rings" },
        { src: "earrings-jewel-svgrepo-com.svg", name: "Earrings" },
        { src: "bracelet-svgrepo-com.svg", name: "Bracelet" },
        { src: "gift-svgrepo-com.svg", name: "Gift" },
        { src: "gems-gem-svgrepo-com.svg", name: "Gems" },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 786);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleImageClick = () => {
        navigate("/collections");
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    return (
        <div className="image-gallery">
            {isMobile && (
                <button className="scroll-left-btn" onClick={handleScrollLeft}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
            )}
            
            <div
                ref={scrollRef}
                className={`image-container ${isMobile ? "mobile-scroll" : "desktop-grid"}`}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="jewelery_svg"
                        onClick={handleImageClick}
                        style={{ cursor: "pointer" }}
                    >
                        <img src={image.src} alt={image.name} />
                        <p className="image-name">{image.name}</p>
                    </div>
                ))}
            </div>
            
            {isMobile && (
                <button className="scroll-right-btn" onClick={handleScrollRight}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default Scrollpic;
