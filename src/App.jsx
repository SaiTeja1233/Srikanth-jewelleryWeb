import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Home from "./components/home/home";
import Collections from "./components/home/Collection/Collections";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loading-logo">
                    <span className="text-gold">Srikanth</span>
                    <span className="text-dark"> Jewellery</span>
                </div>
                <div className="loading-spinner"></div>
            </div>
        );
    }

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

// Helper Components
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
