import { useState, useEffect, useRef } from "react";
import "./Scrollpic.css";

const Scrollpic = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 786);
    const scrollRef = useRef(null);

    const images = [
        { src: "necklace-jewel-svgrepo-com.svg", name: "Necklace" },
        { src: "gem-chain-svgrepo-com.svg", name: "chain" },
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

    return (
        <div className="image-gallery">
            <div
                ref={scrollRef}
                className={`image-container ${
                    isMobile ? "mobile-scroll" : "desktop-grid"
                }`}
            >
                {images.map((image, index) => (
                    <div key={index} className="jewelery_svg">
                        <img src={image.src} alt={image.name} />
                        <p className="image-name">{image.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scrollpic;
