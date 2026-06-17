import React from "react";

function Homepageinprogress() {
    return (
        <div style={styles.container}>
            {/* Subtle Luxury Gold Radiant Glow Background */}
            <div style={styles.goldGlow}></div>

            <div style={styles.card}>
                {/* Elegant Brand Label */}
                <span style={styles.brandTag}>Bespoke Fine Jewellery</span>

                {/* Sophisticated Luxury Coming Soon Header */}
                <h1 style={styles.title}>The Collection is Maturing</h1>
                <h2 style={styles.subtitleHeader}>Arriving Soon</h2>

                <div style={styles.divider}>
                    <div style={styles.diamondNode}></div>
                </div>

                {/* Elite Subtitle */}
                <p style={styles.description}>
                    We are currently perfecting our digital boutique. A
                    meticulously curated showroom featuring our signature
                    diamond settings, solid gold artistry, and timeless bridal
                    suites will be unveiled shortly.
                </p>

                {/* Minimalist Progress Indicator */}
                <div style={styles.statusContainer}>
                    <div style={styles.shimmerLineContainer}>
                        <div style={styles.shimmerLine}></div>
                    </div>
                    <span style={styles.statusText}>
                        Polishing the Final Details
                    </span>
                </div>

                {/* Footer info */}
                <div style={styles.footer}>
                    <p>
                        © 2026 Maison de l'Or. For private inquiries, please
                        contact concierge.
                    </p>
                </div>
            </div>
        </div>
    );
}

// Luxury Theme Styles
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#070708", // Deepest obsidian black
        color: "#ffffff",
        fontFamily:
            '"Didot", "Bodoni MT", "Cinzel", "Playfair Display", "Georgia", serif', // Elegant serif typography
        overflow: "hidden",
        position: "relative",
        padding: "24px",
        boxSizing: "border-box",
    },
    goldGlow: {
        position: "absolute",
        width: "500px",
        height: "500px",
        background:
            "radial-gradient(circle, rgba(212,175,55,0.04) 0%, rgba(0,0,0,0) 70%)", // Subtle 24k gold lighting hue
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
    },
    card: {
        textAlign: "center",
        maxWidth: "600px",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    brandTag: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.35em",
        color: "#d4af37", // Pure Gold Accent
        marginBottom: "24px",
        fontWeight: "500",
    },
    title: {
        fontSize: "2.6rem",
        fontWeight: "300",
        letterSpacing: "0.04em",
        lineHeight: "1.2",
        color: "#fafafa",
        margin: "0 0 8px 0",
    },
    subtitleHeader: {
        fontSize: "1.4rem",
        fontWeight: "300",
        fontStyle: "italic",
        letterSpacing: "0.15em",
        color: "#d4af37",
        margin: "0 0 28px 0",
    },
    divider: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: "28px",
        position: "relative",
        height: "1px",
        background:
            "linear-gradient(90deg, rgba(214,175,55,0) 0%, rgba(214,175,55,0.4) 50%, rgba(214,175,55,0) 100%)", // Fading gold hairline rule
    },
    diamondNode: {
        width: "6px",
        height: "6px",
        backgroundColor: "#d4af37",
        transform: "rotate(45deg)",
        boxShadow: "0 0 8px rgba(214, 175, 55, 0.6)",
    },
    description: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: "0.9rem",
        lineHeight: "1.8",
        color: "#a0a0a5",
        marginBottom: "48px",
        fontWeight: "300",
        letterSpacing: "0.02em",
    },
    statusContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        marginBottom: "40px",
    },
    shimmerLineContainer: {
        width: "120px",
        height: "1px",
        backgroundColor: "#222",
        position: "relative",
        overflow: "hidden",
    },
    shimmerLine: {
        position: "absolute",
        width: "40px",
        height: "100%",
        background:
            "linear-gradient(90deg, transparent, rgba(214,175,55,0.8), transparent)",
    },
    statusText: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontSize: "0.7rem",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "#d4af37",
        fontWeight: "400",
    },
    footer: {
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        paddingTop: "24px",
        fontSize: "0.75rem",
        color: "#444",
        letterSpacing: "0.05em",
    },
};

export default Homepageinprogress;
