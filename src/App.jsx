import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Home from "./components/home/home";
import Collections from "./components/home/Collection/Collections";

function App() {
    const [showVideo, setShowVideo] = useState(true);
    const [isAppReady, setIsAppReady] = useState(false);
    const [isUnmuted, setIsUnmuted] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const videoRef = useRef(null);
    const appRef = useRef(null);

    // Preload the app in the background
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAppReady(true);
            console.log("✅ App preloaded in background");
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleVideoEnd = () => {
        console.log("Video ended - starting fade out");
        setFadeOut(true);

        setTimeout(() => {
            setShowVideo(false);
            console.log("✅ Video hidden, app visible");
        }, 1000);
    };

    const handleUserInteraction = useCallback(() => {
        if (videoRef.current && !isUnmuted) {
            videoRef.current.muted = false;
            setIsUnmuted(true);
            console.log("🔊 Video unmuted by user!");

            document.removeEventListener("click", handleUserInteraction);
            document.removeEventListener("touchstart", handleUserInteraction);
        }
    }, [isUnmuted]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;

            const playPromise = videoRef.current.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log("✅ Video playing muted successfully");
                    })
                    .catch((error) => {
                        console.log("Play failed:", error);
                    });
            }
        }

        document.addEventListener("click", handleUserInteraction);
        document.addEventListener("touchstart", handleUserInteraction);

        return () => {
            document.removeEventListener("click", handleUserInteraction);
            document.removeEventListener("touchstart", handleUserInteraction);
        };
    }, [handleUserInteraction]);

    // Video splash screen with fade out
    if (showVideo) {
        return (
            <>
                {/* Video Splash */}
                <div className={`video-splash ${fadeOut ? "fade-out" : ""}`}>
                    <video
                        ref={videoRef}
                        className="splash-video-full" // Changed class name
                        muted
                        playsInline
                        autoPlay
                        preload="auto"
                        onEnded={handleVideoEnd}
                        controls={false}
                        disablePictureInPicture
                        controlsList="nodownload noplaybackrate"
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        x5-video-player-type="h5"
                        x5-video-player-fullscreen="true"
                        x5-video-orientation="portraint"
                    >
                        <source
                            src="/media/videos/brand.mp4"
                            type="video/mp4"
                        />
                        <source src="/brand.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Unmute hint */}
                    {!isUnmuted && (
                        <div
                            className="unmute-hint"
                            onClick={handleUserInteraction}
                        >
                            🔊 Tap to unmute
                        </div>
                    )}

                    {/* Sound indicator */}
                    {isUnmuted && (
                        <div className="sound-indicator">🔊 Sound on</div>
                    )}

                    {/* Loading indicator */}
                    <div className="preload-indicator">
                        <span className="loading-dot"></span>
                        <span className="loading-dot"></span>
                        <span className="loading-dot"></span>
                    </div>
                </div>

                {/* App preloaded in background */}
                <div
                    ref={appRef}
                    className="app-preload"
                    style={{
                        opacity: 0,
                        pointerEvents: "none",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        visibility: isAppReady ? "visible" : "hidden",
                    }}
                >
                    <BrowserRouter>
                        <div className="App">
                            <Navbar />
                            <main className="main-content">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route
                                        path="/collections"
                                        element={<Collections />}
                                    />
                                    <Route
                                        path="/products"
                                        element={
                                            <PlaceholderPage title="Products" />
                                        }
                                    />
                                    <Route
                                        path="/products/:id"
                                        element={
                                            <PlaceholderPage title="Product Details" />
                                        }
                                    />
                                    <Route
                                        path="/collections/:category"
                                        element={
                                            <PlaceholderPage title="Category" />
                                        }
                                    />
                                    <Route
                                        path="/about"
                                        element={
                                            <PlaceholderPage title="About Us" />
                                        }
                                    />
                                    <Route
                                        path="/contact"
                                        element={
                                            <PlaceholderPage title="Contact Us" />
                                        }
                                    />
                                    <Route
                                        path="/cart"
                                        element={
                                            <PlaceholderPage title="Shopping Cart" />
                                        }
                                    />
                                    <Route
                                        path="/checkout"
                                        element={
                                            <PlaceholderPage title="Checkout" />
                                        }
                                    />
                                    <Route
                                        path="/account"
                                        element={
                                            <PlaceholderPage title="My Account" />
                                        }
                                    />
                                    <Route
                                        path="/wishlist"
                                        element={
                                            <PlaceholderPage title="Wishlist" />
                                        }
                                    />
                                    <Route
                                        path="*"
                                        element={<NotFoundPage />}
                                    />
                                </Routes>
                            </main>
                            <BottomNav />
                        </div>
                    </BrowserRouter>
                </div>
            </>
        );
    }

    // Main App
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route
                            path="/products"
                            element={<PlaceholderPage title="Products" />}
                        />
                        <Route
                            path="/products/:id"
                            element={
                                <PlaceholderPage title="Product Details" />
                            }
                        />
                        <Route
                            path="/collections/:category"
                            element={<PlaceholderPage title="Category" />}
                        />
                        <Route
                            path="/about"
                            element={<PlaceholderPage title="About Us" />}
                        />
                        <Route
                            path="/contact"
                            element={<PlaceholderPage title="Contact Us" />}
                        />
                        <Route
                            path="/cart"
                            element={<PlaceholderPage title="Shopping Cart" />}
                        />
                        <Route
                            path="/checkout"
                            element={<PlaceholderPage title="Checkout" />}
                        />
                        <Route
                            path="/account"
                            element={<PlaceholderPage title="My Account" />}
                        />
                        <Route
                            path="/wishlist"
                            element={<PlaceholderPage title="Wishlist" />}
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <BottomNav />
            </div>
        </BrowserRouter>
    );
}

function PlaceholderPage({ title }) {
    return (
        <div className="container py-16">
            <h1 className="section-title">{title}</h1>
            <div className="page-placeholder">
                <div className="placeholder-icon">
                    <i
                        className="bi bi-gem"
                        style={{
                            fontSize: "3rem",
                            color: "var(--primary-gold)",
                        }}
                    ></i>
                </div>
                <h2>{title} Page Coming Soon</h2>
                <p>
                    This section is currently under development. Please check
                    back later.
                </p>
                <a href="/" className="btn-primary mt-2">
                    <i className="bi bi-house-door"></i> Back to Home
                </a>
            </div>
        </div>
    );
}

function NotFoundPage() {
    return (
        <div className="container py-16 text-center">
            <div className="not-found-container">
                <div className="error-icon">
                    <i
                        className="bi bi-gem"
                        style={{
                            fontSize: "5rem",
                            color: "var(--primary-gold)",
                        }}
                    ></i>
                </div>
                <h1
                    className="text-gold mt-2"
                    style={{ fontSize: "4rem", fontWeight: "700" }}
                >
                    404
                </h1>
                <h2 className="mb-2">Page Not Found</h2>
                <p className="mb-3">
                    The jewellery piece you're looking for seems to be missing.
                </p>
                <a href="/" className="btn-primary">
                    <i className="bi bi-arrow-left"></i> Return to Collections
                </a>
            </div>
        </div>
    );
}

export default App;
