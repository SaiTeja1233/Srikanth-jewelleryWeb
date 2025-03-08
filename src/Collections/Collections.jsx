import React, { useState } from "react";
import "./Collections.css";
import { database } from "../appwrite/appwriteConfig";

function Collections() {
    const collections = [
        { src: "necklace-jewel-svgrepo-com.svg", label: "Necklaces" },
        { src: "gem-chain-svgrepo-com.svg", label: "Chains" },
        { src: "bracelet-svgrepo-com.svg", label: "Bracelets" },
        {
            src: "wedding-rings-wedding-svgrepo-com.svg",
            label: "Rings",
        },
        { src: "earrings-jewel-svgrepo-com.svg", label: "Earrings" },
        { src: "gems-gem-svgrepo-com.svg", label: "Gems" },
        { src: "gift-svgrepo-com.svg", label: "Gifts" },
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const [popupData, setPopupData] = useState(null);
    const [selectedSection, setSelectedSection] = useState("regular");

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    const openPopup = (image) => {
        setPopupData(image);
    };

    const closePopup = () => {
        setPopupData(null);
    };

    const saveOrder = async (name, phone, email, weight, productImage) => {
        try {
            // Convert weight to a number
            const weightInt = parseInt(weight, 10);
            if (isNaN(weightInt)) {
                alert("Please enter a valid number for weight.");
                return;
            }

            // Create order in Appwrite
            const response = await database.createDocument(
                "67c36b3a00308e4e0898", // Replace with your actual Database ID
                "67c36b4d001948fc15b7", // Replace with your actual Collection ID
                "unique()", // Auto-generate document ID
                {
                    name,
                    phone,
                    email,
                    weight: weightInt,
                    productImage,
                }
            );

            console.log("Order saved:", response);
            alert("Order placed successfully!");
            closePopup();
        } catch (error) {
            console.error("Error saving order:", error.message);
            alert(`Failed to place order: ${error.message}`);
        }
    };

    return (
        <div className="collections-container">
            <div className="collectionCont2">
                <div className="collectionCont-button">
                    <div className="circle-container">
                        {collections.map((item, index) => {
                            const angle = (360 / collections.length) * index;
                            return (
                                <img
                                    key={index}
                                    src={item.src}
                                    alt={item.label}
                                    className={`circle-image ${
                                        activeIndex === index ? "active" : ""
                                    }`}
                                    style={{
                                        transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                                        filter:
                                            activeIndex !== index
                                                ? "blur(5px)"
                                                : "none",
                                    }}
                                />
                            );
                        })}
                    </div>
                    <div className="buttons">
                        <div className="collection-buttons">
                            {collections.map((item, index) => (
                                <button
                                    key={index}
                                    className={
                                        activeIndex === index
                                            ? "active-btn"
                                            : ""
                                    }
                                    onClick={() => handleButtonClick(index)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                        {activeIndex !== null && (
                            <div
                                className="scroll-down"
                                onClick={() =>
                                    window.scrollBy({
                                        top: 400,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Scroll Down
                                <span className="arrow">↓</span>
                            </div>
                        )}
                    </div>
                    {activeIndex !== null && (
                        <div className="collection-display">
                            <h2>{collections[activeIndex].label} Collection</h2>
                        </div>
                    )}
                </div>
            </div>
            {activeIndex !== null && (
                <div className="collection-section">
                    {collections[activeIndex].label === "Earrings" && (
                        <div className="earrings">
                            {[
                                "eraring1.png",
                                "eraring2.png",
                                "eraring3.png",
                                "eraring4.png",
                                "eraring5.png",
                            ].map((imgSrc, idx) => (
                                <div className="earring-container" key={idx}>
                                    <div className="collection-image-container">
                                        <img src={imgSrc} alt="" />
                                    </div>
                                    <button
                                        className="customize"
                                        onClick={() => openPopup(imgSrc)}
                                    >
                                        Customize
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {collections[activeIndex].label === "Bracelets" && (
                        <div className="bracelet">
                            {[
                                "bracelet1.png",
                                "bracelet2.png",
                                "bracelet3.png",
                                "bracelet4.png",
                                "bracelet5.png",
                                "bracelet6.png",
                                "bracelet7.png",
                            ].map((imgSrc, idx) => (
                                <div className="bracelet-container" key={idx}>
                                    <div className="collection-image-container">
                                        <img src={imgSrc} alt="" />
                                    </div>
                                    <button
                                        className="customize"
                                        onClick={() => openPopup(imgSrc)}
                                    >
                                        Customize
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {collections[activeIndex].label === "Necklaces" && (
                        <div className="necklace">
                            {[
                                "necklace1.jpg",
                                "necklace2.jpg",
                                "necklace3.jpg",
                                "necklace4.jpg",
                                "necklace5.jpg",
                            ].map((imgSrc, idx) => (
                                <div className="necklace-container" key={idx}>
                                    <div className="collection-image-container">
                                        <img src={imgSrc} alt="" />
                                    </div>
                                    <button
                                        className="customize"
                                        onClick={() => openPopup(imgSrc)}
                                    >
                                        Customize
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {collections[activeIndex].label === "Chains" && (
                        <div className="chain">
                            {[
                                "chain1.jpg",
                                "chain2.jpg",
                                "chain3.jpg",
                                "chain4.jpg",
                                "chain5.jpg",
                            ].map((imgSrc, idx) => (
                                <div className="chain-container" key={idx}>
                                    <div className="collection-image-container">
                                        <img src={imgSrc} alt="" />
                                    </div>
                                    <button
                                        className="customize"
                                        onClick={() => openPopup(imgSrc)}
                                    >
                                        Customize
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {collections[activeIndex].label === "Gems" && (
                        <div className="gems">
                            {[
                                "gemstone1.png",
                                "gemstone2.png",
                                "gemstone3.png",
                                "gemstone4.png",
                                "gemstone5.png",
                                "gemstone6.png",
                                "gemstone7.png",
                                "gemstone8.png",
                            ].map((imgSrc, idx) => (
                                <div className="gemstone-container" key={idx}>
                                    <div className="collection-image-container">
                                        <img src={imgSrc} alt="" />
                                    </div>
                                    <button
                                        className="customize"
                                        onClick={() => openPopup(imgSrc)}
                                    >
                                        Customize
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {collections[activeIndex].label === "Gifts" && (
                        <div className="gift">
                            <div className="gift1">Gift</div>
                            <div className="gift2">Gift</div>
                            <div className="gift3">Gift</div>
                            <div className="gift4">Gift</div>
                            <div className="gift5">Gift</div>
                        </div>
                    )}
                    {collections[activeIndex].label === "Rings" && (
                        <div className="rings">
                            {/* Switch Button */}
                            <div className="switch-container">
                                <button
                                    className={`switch-button ${
                                        selectedSection === "regular"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedSection("regular")
                                    }
                                >
                                    Regular Rings
                                </button>
                                <button
                                    className={`switch-button ${
                                        selectedSection === "engagement"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedSection("engagement")
                                    }
                                >
                                    Engagement Rings
                                </button>
                            </div>

                            {/* Regular Rings Section */}
                            {selectedSection === "regular" && (
                                <>
                                    <div className="regular-rings">
                                        {[
                                            "ring1.jpg",
                                            "ring2.jpg",
                                            "ring3.jpg",
                                            "ring4.jpg",
                                            "ring5.jpg",
                                            "ring6.jpg",
                                        ].map((imgSrc, idx) => (
                                            <div
                                                className="rings-container"
                                                key={idx}
                                            >
                                                <div className="collection-image-container">
                                                    <img src={imgSrc} alt="" />
                                                </div>
                                                <button
                                                    className="customize"
                                                    onClick={() =>
                                                        openPopup(imgSrc)
                                                    }
                                                >
                                                    Customize
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Engagement Rings Section */}
                            {selectedSection === "engagement" && (
                                <>
                                    <div className="engagement-rings-container">
                                        {[
                                            "ring7.jpg",
                                            "ring8.jpg",
                                            "ring9.jpg",
                                            "ring10.jpg",
                                            "ring11.jpg",
                                            "ring12.jpg",
                                            "ring13.jpg",
                                        ].map((imgSrc, idx) => (
                                            <div
                                                className="rings-container"
                                                key={idx}
                                            >
                                                <div className="collection-image-container">
                                                    <img src={imgSrc} alt="" />
                                                </div>
                                                <button
                                                    className="customize"
                                                    onClick={() =>
                                                        openPopup(imgSrc)
                                                    }
                                                >
                                                    Customize
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            )}
            {popupData && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>
                  <i className="bi bi-x-lg" style={{ fontWeight: 600 }}></i>


                        </button>
                        <div className="popup-body">
                            <div className="popup-image">
                                <img src={popupData} alt="Selected Item" />
                            </div>
                            <div className="popup-options">
                                <h3>Customize Your Jewelry</h3>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                />
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                />
                                <input type="email" placeholder="Enter email" />
                                <input
                                    type="number"
                                    placeholder="Enter weight in grams"
                                />

                                <button
                                    className="add-to-cart"
                                    onClick={() => {
                                        const name = document.querySelector(
                                            "input[placeholder='Enter your name']"
                                        ).value;
                                        const phone = document.querySelector(
                                            "input[placeholder='Enter phone number']"
                                        ).value;
                                        const email = document.querySelector(
                                            "input[placeholder='Enter email']"
                                        ).value;
                                        const weight = document.querySelector(
                                            "input[placeholder='Enter weight in grams']"
                                        ).value;

                                        if (name && phone && email && weight) {
                                            saveOrder(
                                                name,
                                                phone,
                                                email,
                                                weight,
                                                popupData
                                            ); // Send the product image as well
                                        } else {
                                            alert("Please fill all fields.");
                                        }
                                    }}
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Collections;
