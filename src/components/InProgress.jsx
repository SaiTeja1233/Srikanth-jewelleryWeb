import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function InProgress() {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true); // Start muted to bypass browser block

    const handleVideoEnd = () => {
        navigate("/home", { replace: true });
    };

    const handleScreenTouch = () => {
        if (videoRef.current) {
            videoRef.current.muted = false; // Unmute on touch
            setIsMuted(false);
            videoRef.current
                .play()
                .catch((err) => console.log("Play interrupted:", err));
        }
    };

    return (
        <div
            onClick={handleScreenTouch}
            onTouchStart={handleScreenTouch} // Fix for mobile screens
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
                backgroundColor: "#000",
                overflow: "hidden",
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                muted={isMuted} // Dynamically controlled
                playsInline
                onEnded={handleVideoEnd}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    pointerEvents: "none",
                }}
            >
                <source src="/media/videos/brand.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Optional Overlay Hint for the User if video doesn't play audio immediately */}
            {isMuted && (
                <div
                    style={{
                        position: "absolute",
                        color: "#fff",
                        background: "rgba(0,0,0,0.6)",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        pointerEvents: "none",
                        fontSize: "14px",
                    }}
                >
                    Tap anywhere to enable sound
                </div>
            )}
        </div>
    );
}

export default InProgress;
