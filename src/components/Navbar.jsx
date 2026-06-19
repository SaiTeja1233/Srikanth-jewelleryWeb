import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showMobileCategories, setShowMobileCategories] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const categoriesRef = useRef(null);
    const scrollTimeoutRef = useRef(null);
    const navigate = useNavigate();

    const categories = [
        { name: "Gold Collection", slug: "gold" },
        { name: "Diamond Collection", slug: "diamond" },
        { name: "Bridal Jewellery", slug: "bridal" },
        { name: "Temple Jewellery", slug: "temple" },
        { name: "Daily Wear", slug: "daily-wear" },
        { name: "Men's Jewellery", slug: "mens-jewellery" },
        { name: "Earrings", slug: "earrings" },
        { name: "Necklaces", slug: "necklaces" },
        { name: "Rings", slug: "rings" },
        { name: "Bangles", slug: "bangles" },
    ];

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setShowMobileCategories(false);
        }
    };

    const toggleMobileCategories = () => {
        setShowMobileCategories(!showMobileCategories);
    };

    useEffect(() => {
        let ticking = false;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    setIsVisible(false);

                    if (scrollTimeoutRef.current) {
                        clearTimeout(scrollTimeoutRef.current);
                    }

                    scrollTimeoutRef.current = setTimeout(() => {
                        setIsVisible(true);
                    }, 1000); 
                    setScrolled(currentScrollY > 20);

                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        const checkTopPosition = () => {
            if (window.scrollY < 50) {
                setIsVisible(true);
                // Clear timeout when at top
                if (scrollTimeoutRef.current) {
                    clearTimeout(scrollTimeoutRef.current);
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("scroll", checkTopPosition, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", checkTopPosition);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Close mobile menu
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
                setShowMobileCategories(false);
            }

            if (
                categoriesRef.current &&
                !categoriesRef.current.contains(event.target)
            ) {
                setShowCategories(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <nav
            className={`navbar1 ${scrolled ? "scrolled" : ""} ${isVisible ? "visible" : "hidden"}`}
        >
            <div className="navbar-content">
                {/* Logo */}
                <div className="navbar-logo" onClick={() => navigate("/")}>
                    <div className="logo-name">
                        <span className="srikanth">SRIKANTH</span>
                        <span className="jewellery-text">Fine Jewellery</span>
                    </div>
                </div>

                <div className="navbar-links-desktop">
                    <ul className="navbar-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li
                            className="categories-item"
                            ref={categoriesRef}
                            onMouseEnter={() => setShowCategories(true)}
                            onMouseLeave={() => setShowCategories(false)}
                        >
                            <span className="categories-link">
                                Categories ▾
                            </span>

                            {showCategories && (
                                <div className="categories-dropdown">
                                    <h3 className="dropdown-title">
                                        OUR COLLECTIONS
                                    </h3>
                                    <div className="categories-grid">
                                        {categories.map((category, index) => (
                                            <Link
                                                key={index}
                                                to={`/collections/${category.slug}`}
                                                className="category-card"
                                                onClick={() =>
                                                    setShowCategories(false)
                                                }
                                            >
                                                <span className="category-icon">
                                                    {category.icon}
                                                </span>
                                                <span className="category-name">
                                                    {category.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>

                        <li>
                            <Link to="/new-arrivals">New Arrivals</Link>
                        </li>
                        <li>
                            <Link to="/custom-design">Custom Design</Link>
                        </li>
                    </ul>

                    <div className="navbar-auth">
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="navbar-button logout"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={handleLogin}
                                className="navbar-button login"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>

                <div
                    className={`hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    ref={hamburgerRef}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            <div
                className={`navbar-links-mobile ${isMenuOpen ? "open" : ""}`}
                ref={menuRef}
            >
                <div className="mobile-menu-content">
                    <div className="mobile-links-section">
                        <Link
                            to="/"
                            className="mobile-nav-link"
                            onClick={toggleMenu}
                        >
                            <span className="mobile-link-text">Home</span>
                        </Link>

                        <Link
                            to="/about"
                            className="mobile-nav-link"
                            onClick={toggleMenu}
                        >
                            <span className="mobile-link-text">About Us</span>
                        </Link>

                        <Link
                            to="/new-arrivals"
                            className="mobile-nav-link"
                            onClick={toggleMenu}
                        >
                            <span className="mobile-link-text">
                                New Arrivals
                            </span>
                        </Link>

                        <Link
                            to="/custom-design"
                            className="mobile-nav-link"
                            onClick={toggleMenu}
                        >
                            <span className="mobile-link-text">
                                Custom Design
                            </span>
                        </Link>

                        <div
                            className={`mobile-categories-toggle ${showMobileCategories ? "active" : ""}`}
                            onClick={toggleMobileCategories}
                        >
                            <span className="mobile-link-text">
                                Collections
                            </span>
                            <span className="mobile-toggle-arrow">
                                {showMobileCategories ? "▲" : "▼"}
                            </span>
                        </div>

                        {showMobileCategories && (
                            <div className="mobile-categories-dropdown">
                                <div className="mobile-categories-header">
                                    <h3>JEWELLERY COLLECTIONS</h3>
                                    <p>Explore our exquisite range</p>
                                </div>
                                <div className="mobile-categories-grid">
                                    {categories.map((category, index) => (
                                        <Link
                                            key={index}
                                            to={`/collections/${category.slug}`}
                                            className="mobile-category-card"
                                            onClick={toggleMenu}
                                        >
                                            <div className="mobile-category-icon">
                                                {category.icon}
                                            </div>
                                            <div className="mobile-category-name">
                                                {category.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Login Section */}
                    <div className="mobile-auth-section">
                        <div className="mobile-user-info">
                            <span className="user-icon">👤</span>
                            <span>
                                {isLoggedIn ? "Welcome Back!" : "Hello, Guest"}
                            </span>
                        </div>
                        {isLoggedIn ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    toggleMenu();
                                }}
                                className="mobile-logout-btn"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    handleLogin();
                                    toggleMenu();
                                }}
                                className="mobile-login-btn"
                            >
                                Login / Sign Up
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
