import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const data = [
    {
        place: "Switzerland Alps",
        title: "SAINT",
        description:
            "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility.",
        image: "/media/images/home-cards/homeimg6.webp",
    },
    {
        place: "Japan Alps",
        title: "NAGANO",
        description:
            "Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove.",
        image: "/media/images/home-cards/homeimg1.webp",
    },
    {
        place: "Sahara Desert",
        title: "MARRAKECH",
        description:
            "The journey from the vibrant souks of Marrakech to the tranquil sands of Merzouga.",
        image: "/media/images/home-cards/homeimg3.webp",
    },
    {
        place: "Sierra Nevada",
        title: "YOSEMITE",
        description:
            "Yosemite National Park is a showcase of the American wilderness, revered for granite monoliths.",
        image: "/media/images/home-cards/homeimg4.webp",
    },
    {
        place: "Tarifa - Spain",
        title: "LOS LANCES",
        description:
            "Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds.",
        image: "/media/images/home-cards/homeimg5.webp",
    },
    {
        place: "Cappadocia",
        title: "GÖREME",
        description:
            "Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop.",
        image: "/media/images/home-cards/homeimg2.webp",
    },
];

const jewelleryCollections = [
    {
        id: 1,
        name: "Gold Collection",
        description: "Pure 24K & 22K Gold Jewellery",
        price: "₹15,999",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        slug: "gold",
        rating: 4.8,
        items: 45,
    },
    {
        id: 2,
        name: "Diamond Collection",
        description: "Exquisite Diamond Studded Pieces",
        price: "₹25,999",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        slug: "diamond",
        rating: 4.9,
        items: 32,
    },
    {
        id: 3,
        name: "Bridal Jewellery",
        description: "Complete Bridal Sets & Ornaments",
        price: "₹35,999",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        slug: "bridal",
        rating: 4.7,
        items: 28,
    },
    {
        id: 4,
        name: "Temple Jewellery",
        description: "Traditional South Indian Designs",
        price: "₹28,999",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        slug: "temple",
        rating: 4.6,
        items: 18,
    },
];

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredJewellery, setHoveredJewellery] = useState(null);
    const [showJewellery, setShowJewellery] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const orderRef = useRef([0, 1, 2, 3, 4, 5]);
    const containerRef = useRef(null);
    const indicatorRef = useRef(null);
    const videoRef = useRef(null);
    const isRunning = useRef(true);
    const navigate = useNavigate();

    const preloadImages = () => {
        const imageUrls = data.map((item) => item.image);
        imageUrls.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    };

    const getLayoutConfig = () => {
        const isMobile = window.innerWidth < 768;
        return {
            isMobile,
            cardWidth: isMobile ? 90 : 200,
            cardHeight: isMobile ? 130 : 200,
            gap: isMobile ? 10 : 30,
            bottomOffset: isMobile ? 200 : 250, 
            rightOffset: isMobile ? 310 : 700,
            transitionSpeed: 0.8, 
            waitDuration: 4,
        };
    };

    useEffect(() => {
        preloadImages();

        const timer = setTimeout(() => {
            setShowJewellery(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        isRunning.current = true;
        let ctx;

        const init = () => {
            const config = getLayoutConfig();
            const [active, ...rest] = orderRef.current;
            const { innerHeight: height, innerWidth: width } = window;

            gsap.set(`#card${active}`, {
                x: 0,
                y: 0,
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
                zIndex: 1,
                immediateRender: true,
            });
            gsap.set(`#card-content-${active}`, {
                autoAlpha: 0,
                immediateRender: true,
            });

            rest.forEach((i, index) => {
                gsap.set(`#card${i}`, {
                    x:
                        width -
                        config.rightOffset +
                        index * (config.cardWidth + config.gap),
                    y: height - config.bottomOffset,
                    width: config.cardWidth,
                    height: config.cardHeight,
                    zIndex: 20,
                    borderRadius: config.isMobile ? 8 : 15,
                    immediateRender: true,
                });
                gsap.set(`#card-content-${i}`, {
                    autoAlpha: 1,
                    immediateRender: true,
                });
            });
        };

        ctx = gsap.context(() => {
            const step = () => {
                return new Promise((resolve) => {
                    if (!isRunning.current) return;

                    const config = getLayoutConfig();
                    const oldOrder = [...orderRef.current];
                    const prevActive = oldOrder[0];
                    orderRef.current.push(orderRef.current.shift());
                    const [newActive, ...rest] = orderRef.current;

                    const { innerHeight: height, innerWidth: width } = window;

                    const tl = gsap.timeline({
                        onComplete: resolve,
                        defaults: { ease: "power2.inOut", overwrite: "auto" },
                    });

                    tl.to(
                        `#card${newActive}`,
                        {
                            x: 0,
                            y: 0,
                            width: "100vw",
                            height: "100vh",
                            borderRadius: 0,
                            zIndex: 10,
                            duration: config.transitionSpeed,
                        },
                        0,
                    );

                    tl.to(
                        `#card${prevActive}`,
                        {
                            opacity: 0,
                            duration: config.transitionSpeed,
                            zIndex: 0,
                        },
                        0,
                    );

                    tl.call(() => setActiveIndex(newActive), null, 0.3);

                    tl.fromTo(
                        ".details-content > *",
                        { autoAlpha: 0, y: 10 },
                        { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.6 },
                        0.5,
                    );

                    const xLast =
                        width -
                        config.rightOffset +
                        (rest.length - 1) * (config.cardWidth + config.gap);

                    tl.set(
                        `#card${prevActive}`,
                        {
                            x: xLast,
                            y: height - config.bottomOffset,
                            width: config.cardWidth,
                            height: config.cardHeight,
                            borderRadius: config.isMobile ? 8 : 15,
                            opacity: 1,
                            zIndex: 20,
                        },
                        "-=0.4",
                    );

                    rest.forEach((i, index) => {
                        if (i !== prevActive) {
                            tl.to(
                                `#card${i}`,
                                {
                                    x:
                                        width -
                                        config.rightOffset +
                                        index * (config.cardWidth + config.gap),
                                    duration: config.transitionSpeed,
                                },
                                0,
                            );
                        }
                    });
                });
            };

            async function startLoop() {
                await gsap.to({}, { duration: 0.5 });

                while (isRunning.current) {
                    const config = getLayoutConfig();
                    gsap.set(indicatorRef.current, {
                        scaleX: 0,
                        transformOrigin: "left",
                        immediateRender: true,
                    });

                    await gsap.to(indicatorRef.current, {
                        scaleX: 1,
                        duration: config.waitDuration,
                        ease: "none",
                    });

                    if (isRunning.current) await step();
                }
            }

            init();

            gsap.to(".cover", {
                x: window.innerWidth + 400,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: startLoop,
            });
        }, containerRef);

        const handleResize = debounce(() => {
            gsap.killTweensOf(".card");
            init();
        }, 150);

        window.addEventListener("resize", handleResize);

        return () => {
            isRunning.current = false;
            ctx.revert();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleExploreClick = () => {
        navigate("/collections");
    };

    const handleJewelleryClick = (slug) => {
        navigate(`/collections/${slug}`);
    };

    const handleVideoPlay = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((e) => {
                console.log("Video autoplay prevented, trying muted");
                videoRef.current.muted = true;
                videoRef.current.play();
            });
        }
    };

    return (
        <div className="homeMain">
            <div className="timed-cards-container" ref={containerRef}>
                <div className="indicator" ref={indicatorRef}></div>
                <div id="demo">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="card"
                            id={`card${index}`}
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 100%), url(${item.image})`,
                            }}
                        >
                            <div
                                className="small-card-content"
                                id={`card-content-${index}`}
                            >
                                <div className="small-title">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="details">
                    <div className="details-content">
                        <div className="place-tag">
                            {data[activeIndex].place}
                        </div>
                        <h1 className="title-main">
                            {data[activeIndex].title}
                        </h1>
                        <p className="description">
                            {data[activeIndex].description}
                        </p>
                        <button
                            className="explore-btn"
                            onClick={handleExploreClick}
                        >
                            EXPLORE NOW
                        </button>
                    </div>
                </div>

                <div className="cover"></div>
            </div>

            <div
                className="stroke"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src="/media/images/stroke.png"
                    alt=""
                    style={{ height: "10vh" }}
                />
            </div>

            {showJewellery && (
                <div className="jewellery-home-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">
                                Featured Collections
                            </h2>
                            <p className="section-subtitle">
                                Explore our premium jewellery collections
                            </p>
                        </div>

                        <div className="jewellery-home-grid">
                            {jewelleryCollections.slice(0, 4).map(
                                (
                                    item, 
                                ) => (
                                    <div
                                        key={item.id}
                                        className="jewellery-home-card"
                                        onMouseEnter={() =>
                                            setHoveredJewellery(item.id)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredJewellery(null)
                                        }
                                        onClick={() =>
                                            handleJewelleryClick(item.slug)
                                        }
                                    >
                                        <div className="jewellery-image-wrapper">
                                            <div
                                                className="jewellery-home-image"
                                                style={{
                                                    backgroundImage: `url(${item.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center",
                                                }}
                                            >
                                                <div
                                                    className={`jewellery-overlay ${hoveredJewellery === item.id ? "show" : ""}`}
                                                >
                                                    <span className="overlay-text">
                                                        View Collection
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="jewellery-home-content">
                                            <h3 className="jewellery-home-name">
                                                {item.name}
                                            </h3>
                                            <p className="jewellery-home-description">
                                                {item.description}
                                            </p>
                                            <div className="jewellery-home-footer">
                                                <button
                                                    className="jewellery-explore-btn"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleJewelleryClick(
                                                            item.slug,
                                                        );
                                                    }}
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ),
                            )}
                        </div>

                        <div className="explore-all-section">
                            <button
                                className="explore-all-btn"
                                onClick={handleExploreClick}
                            >
                                Explore All Collections
                                <span className="explore-arrow">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="horizontal-banner-section">
                <div className="horizontal-banner-image">
                    <img
                        src="media/images/home-cards/Bridal-Jewellery-Collection.png"
                        alt="Bridal Jewellery Collection"
                        className="horizontal-banner-img"
                    />
                    <div className="left-dark-overlay"></div>
                    <div className="horizontal-banner-content">
                        <div className="horizontal-banner-text">
                            <div className="wedding-quote">
                                <p className="quote-line-1">
                                    Where blessings, tears, and joy shine in
                                    gold.
                                </p>
                                <p className="quote-line-2">
                                    Jewellery created for weddings that live
                                    forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jewellery-promo-section">
                <div className="container">
                    <div className="promo-content-wrapper">
                        <div className="promo-text-content">
                            <h2 className="promo-title">
                                Srikanth Jewellery:{" "}
                                <span className="highlight">
                                    Crafting Legacy
                                </span>{" "}
                                Since Three Decades
                            </h2>
                            <div className="promo-description">
                                <p className="promo-para">
                                    For over 30 years, Srikanth Jewellery has
                                    been the epitome of elegance, trust, and
                                    unparalleled craftsmanship. Each piece is
                                    meticulously crafted by master artisans,
                                    blending traditional techniques with
                                    contemporary designs.
                                </p>
                                <div className="promo-stats">
                                    <div className="stat-item">
                                        <span className="stat-number">30+</span>
                                        <span className="stat-label">
                                            Years of Excellence
                                        </span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">
                                            50K+
                                        </span>
                                        <span className="stat-label">
                                            Happy Customers
                                        </span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-number">
                                            100%
                                        </span>
                                        <span className="stat-label">
                                            Pure Quality
                                        </span>
                                    </div>
                                </div>
                                <p className="promo-quote">
                                    "Where tradition meets innovation, creating
                                    heirlooms for generations."
                                </p>
                            </div>
                        </div>

                        <div className="promo-video-container">
                            <div className="video-wrapper">
                                <video
                                    ref={videoRef}
                                    className="promo-video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    onLoadedData={() => setVideoLoaded(true)}
                                    onCanPlay={handleVideoPlay}
                                >
                                    <source
                                        src="/media/videos/homevid.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                <div
                                    className={`video-loading ${videoLoaded ? "loaded" : ""}`}
                                >
                                    <div className="loading-spinner"></div>
                                </div>
                                <div className="video-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sliver-container-section">
                <div className="sliver-container-image">
                    <img
                        src="media/images/home-cards/sliverCont.png"
                        alt="Premium Sliver Jewellery Collection"
                        className="sliver-container-img"
                    />
                    <div className="sliver-container-content">
                        <div className="sliver-container-text">
                            <div className="sliver-quote">
                                <h2 className="sliver-main-title">
                                    ABOUT SLIVER
                                </h2>
                                <p className="sliver-line-1">
                                    Where craftsmanship meets modern design
                                </p>
                                <p className="sliver-line-2">
                                    Handcrafted silver jewellery that tells your
                                    unique story
                                </p>

                                <button
                                    className="sliver-explore-btn"
                                    onClick={handleExploreClick}
                                >
                                    Explore Silver Collection
                                    <span className="sliver-arrow">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
