import { useState, useEffect, useCallback } from "react";
import "./AnimatedSearchInput.css";

const searchTerms = [
    "Gold Rings...",
    "Diamond Necklaces...",
    "Silver Bangles...",
    "Platinum Earrings...",
    "Gemstone Pendants...",
    "Bridal Sets...",
];

const prefix = "Search for ";

const CHARACTER_SPEED = 80;
const PAUSE_DURATION = 2000;
const DELETE_SPEED = 60;

function AnimatedSearchInput() {
    const [displayText, setDisplayText] = useState("");
    const [currentTermIndex, setCurrentTermIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const animate = useCallback(() => {
        if (isPaused) return;

        const currentTerm = searchTerms[currentTermIndex];

        if (isDeleting) {
            // Delete character
            if (displayText === prefix) {
                setIsDeleting(false);
                setIsPaused(true);
                setCurrentTermIndex((prev) => (prev + 1) % searchTerms.length);

                setTimeout(() => {
                    setIsPaused(false);
                }, 500);
                return;
            }

            setDisplayText((prev) => prev.slice(0, -1));
        } else {
            // Type character
            if (displayText.length === prefix.length + currentTerm.length) {
                setIsDeleting(true);
                setIsPaused(true);

                setTimeout(() => {
                    setIsPaused(false);
                }, PAUSE_DURATION);
                return;
            }

            const nextChar = currentTerm[displayText.length - prefix.length];
            setDisplayText((prev) => prev + (nextChar || ""));
        }
    }, [displayText, currentTermIndex, isDeleting, isPaused]);

    useEffect(() => {
        setDisplayText(prefix);
    }, []);

    useEffect(() => {
        const speed = isDeleting ? DELETE_SPEED : CHARACTER_SPEED;
        const timer = setTimeout(animate, speed);

        return () => clearTimeout(timer);
    }, [animate, isDeleting]);

    const handleFocus = () => {
        // Optional: Pause animation on focus
        setIsPaused(true);
    };

    const handleBlur = () => {
        if (displayText === prefix) {
            setIsPaused(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search functionality
        console.log("Searching for:", displayText.replace(prefix, ""));
    };

    return (
        <form onSubmit={handleSearch} className="animated-search-form">
            <input
                type="search"
                value={displayText}
                onChange={(e) => setDisplayText(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="animated-search-input"
                aria-label="Search jewellery"
                style={{
                    letterSpacing: "0.05em",
                    fontStyle: "italic",
                    caretColor: "#d4af37",
                }}
            />
            <div className="typing-indicator">
                <div className={`cursor ${isPaused ? "paused" : ""}`}></div>
            </div>
        </form>
    );
}

export default AnimatedSearchInput;
