import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Client, Account } from "appwrite";
import "./Navbar.css";

const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67c22add0009c8ceb7b4");
const account = new Account(client);

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [authPopup, setAuthPopup] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [loginClicked, setLoginClicked] = useState(false);
    const popupRef = useRef(null);
    const adminEmails = ["k.saiteja1233@gmail.com"];

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await account.get();
                if (user) {
                    setIsAuthenticated(true);
                    setUserEmail(user.email.toLowerCase());
                }
            } catch (error) {
                setIsAuthenticated(false);
                setUserEmail("");
            }
        };
        getUser();
    }, []);

    const handleLogout = async () => {
        try {
            await account.deleteSession("current");
            setUserEmail("");
            setIsAuthenticated(false);
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

    const handleAuth = async (event) => {
        event.preventDefault();
        setLoginClicked(true);

        const email = event.target.email?.value?.trim() || "";
        const password = event.target.password?.value?.trim() || "";
        const name = isLogin ? "" : event.target.name?.value?.trim() || "";

        try {
            if (isLogin) {
                await account.createEmailPasswordSession(email, password);
            } else {
                await account.create("unique()", email, password, name);
                await account.createEmailPasswordSession(email, password);
            }

            const user = await account.get();
            setIsAuthenticated(true);
            setUserEmail(user.email.toLowerCase());

            setAuthPopup(false);
            setMenuOpen(false);
        } catch (error) {
            console.error("Authentication error:", error.message);
        } finally {
            setTimeout(() => setLoginClicked(false), 2000);
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setAuthPopup(false);
            }
        }
        if (authPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [authPopup]);

    return (
        <div className="Nav_main">
            <div className="Nav-logo">
                <img className="Nav-logo-img" src="logopng.png" alt="Logo" />
                <div className="name_logo">
                    <div className="shine">
                        <h3>Srikanth</h3>
                    </div>
                    <div className="logoname">
                        <p>Jewellery Work's</p>
                    </div>
                </div>
            </div>

            <div className={`Nav_links ${menuOpen ? "open" : ""}`}>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="/home" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/collections"
                                onClick={() => setMenuOpen(false)}
                            >
                                Collections
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" onClick={() => setMenuOpen(false)}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        {isAuthenticated &&
                            adminEmails.includes(userEmail.toLowerCase()) && (
                                <li>
                                    <Link
                                        to="/orders"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Orders
                                    </Link>
                                </li>
                            )}
                    </ul>
                </div>
                <div className="Nav_log_Acc">
                    <i className="bi bi-search"></i>
                    <i className="bi bi-heart"></i>
                    {isAuthenticated ? (
                        <i
                            className="bi bi-box-arrow-right"
                            onClick={handleLogout}
                        ></i>
                    ) : (
                        <i
                            className="bi bi-person"
                            onClick={() => setAuthPopup(true)}
                        ></i>
                    )}
                    {authPopup && (
                        <div className="auth-popup" ref={popupRef}>
                            <h3>{isLogin ? "Login" : "Register"}</h3>
                            <form onSubmit={handleAuth}>
                                {!isLogin && (
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />
                                )}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    required
                                />
                                <button type="submit">
                                    {isLogin ? "Login" : "Register"}
                                </button>
                            </form>
                            <p onClick={() => setIsLogin(!isLogin)}>
                                {isLogin
                                    ? "Don't have an account? Register"
                                    : "Already have an account? Login"}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div id="menuToggle">
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)}
                />
                <label className="toggle" htmlFor="checkbox">
                    <div className="bar bar--top"></div>
                    <div className="bar bar--middle"></div>
                    <div className="bar bar--bottom"></div>
                </label>
            </div>

            {loginClicked && (
                <div className="login-message">
                    <p>Login Button Clicked!</p>
                </div>
            )}
        </div>
    );
}

export default Navbar;
