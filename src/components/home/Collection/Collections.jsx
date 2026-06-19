import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Collections.css";

const Collections = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const collections = [
        {
            id: 1,
            name: "Gold Collection",
            description: "Pure 24K & 22K Gold Jewellery",
            itemsCount: 45,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "linear-gradient(135deg, #D4AF37 0%, #F7EF8A 100%)",
            slug: "gold",
            tags: ["24K Gold", "22K Gold", "Traditional", "Modern"],
        },
        {
            id: 2,
            name: "Diamond Collection",
            description: "Exquisite Diamond Studded Pieces",
            itemsCount: 32,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w-800&q=80",
            color: "linear-gradient(135deg, #B9F2FF 0%, #E6F7FF 100%)",
            slug: "diamond",
            tags: ["Solitaire", "Cluster", "Eternity", "Princess Cut"],
        },
        {
            id: 3,
            name: "Bridal Jewellery",
            description: "Complete Bridal Sets & Ornaments",
            itemsCount: 28,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "linear-gradient(135deg, #FF6B6B 0%, #FFE8E8 100%)",
            slug: "bridal",
            tags: ["Bridal Set", "Mangalsutra", "Nath", "Haathphool"],
        },
        {
            id: 4,
            name: "Temple Jewellery",
            description: "Traditional South Indian Temple Designs",
            itemsCount: 18,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
            slug: "temple",
            tags: ["Traditional", "Antique", "Handmade", "Cultural"],
        },
        {
            id: 5,
            name: "Daily Wear",
            description: "Light & Elegant Everyday Jewellery",
            itemsCount: 67,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "linear-gradient(135deg, #9370DB 0%, #D8BFD8 100%)",
            slug: "daily-wear",
            tags: ["Lightweight", "Minimal", "Contemporary", "Versatile"],
        },
        {
            id: 6,
            name: "Men's Jewellery",
            description: "Sophisticated Jewellery for Gentlemen",
            itemsCount: 23,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "linear-gradient(135deg, #2F4F4F 0%, #708090 100%)",
            slug: "mens-jewellery",
            tags: ["Rings", "Chains", "Bracelets", "Cufflinks"],
        },
        {
            id: 7,
            name: "Earrings",
            description: "Elegant Ear Pieces for Every Occasion",
            itemsCount: 89,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "linear-gradient(135deg, #FF69B4 0%, #FFB6C1 100%)",
            slug: "earrings",
            tags: ["Jhumkas", "Studs", "Hoops", "Drops"],
        },
        {
            id: 8,
            name: "Necklaces",
            description: "Statement Neckpieces & Pendants",
            itemsCount: 42,
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            color: "linear-gradient(135deg, #20B2AA 0%, #AFEEEE 100%)",
            slug: "necklaces",
            tags: ["Chokers", "Long Chains", "Pendants", "Statement"],
        },
    ];

    const featuredCollections = collections.slice(0, 3);

    return (
        <div className="collections-container">
            {/* Header Section */}
            <div className="collections-header">
                <div className="header-content">
                    <h1 className="collections-title">
                        <span className="title-line">EXQUISITE</span>
                        <span className="title-line">
                            JEWELLERY COLLECTIONS
                        </span>
                    </h1>
                    <p className="collections-subtitle">
                        Discover our handcrafted jewellery pieces, blending
                        traditional craftsmanship with contemporary designs for
                        every occasion.
                    </p>
                </div>
            </div>

            <div className="featured-collections">
                <h2 className="section-title">Featured Collections</h2>
                <p className="section-subtitle">
                    Our most popular jewellery categories
                </p>

                <div className="featured-grid">
                    {featuredCollections.map((collection) => (
                        <div
                            key={collection.id}
                            className="featured-card"
                            onMouseEnter={() => setHoveredCard(collection.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div
                                className="featured-image"
                                style={{
                                    backgroundImage: `url(${collection.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="featured-overlay"></div>
                                <div className="featured-content">
                                    <h3 className="featured-name">
                                        {collection.name}
                                    </h3>
                                    <p className="featured-description">
                                        {collection.description}
                                    </p>
                                    <div className="featured-stats">
                                        <span className="items-count">
                                            {collection.itemsCount} Items
                                        </span>
                                        <span className="view-btn">
                                            View Collection →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="all-collections">
                <div className="collections-top-bar">
                    <h2 className="section-title">All Collections</h2>
                    <div className="filter-options">
                        <button className="filter-btn active">All</button>
                        <button className="filter-btn">Gold</button>
                        <button className="filter-btn">Diamond</button>
                        <button className="filter-btn">Silver</button>
                        <button className="filter-btn">Traditional</button>
                    </div>
                </div>

                <div className="collections-grid">
                    {collections.map((collection) => (
                        <Link
                            key={collection.id}
                            to={`/collections/${collection.slug}`}
                            className="collection-card"
                            onMouseEnter={() => setHoveredCard(collection.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="card-header">
                                <div
                                    className="collection-color"
                                    style={{ background: collection.color }}
                                ></div>
                                <div className="collection-tags">
                                    {collection.tags
                                        .slice(0, 2)
                                        .map((tag, index) => (
                                            <span key={index} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            <div className="card-content">
                                <h3 className="collection-name">
                                    {collection.name}
                                </h3>
                                <p className="collection-description">
                                    {collection.description}
                                </p>

                                <div className="collection-stats">
                                    <div className="stat-item">
                                        <span className="stat-label">
                                            Items
                                        </span>
                                        <span className="stat-value">
                                            {collection.itemsCount}
                                        </span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">
                                            Starting at
                                        </span>
                                        <span className="stat-price">
                                            ₹5,999
                                        </span>
                                    </div>
                                </div>

                                <div
                                    className={`collection-hover ${hoveredCard === collection.id ? "visible" : ""}`}
                                >
                                    <button className="view-collection-btn">
                                        Browse Collection
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="collections-cta">
                <div className="cta-content">
                    <h2 className="cta-title">Looking for Custom Designs?</h2>
                    <p className="cta-text">
                        Create your unique piece with our custom jewellery
                        design service. Our expert craftsmen will bring your
                        vision to life.
                    </p>
                    <button className="cta-btn">Start Custom Design →</button>
                </div>
            </div>
        </div>
    );
};

export default Collections;
