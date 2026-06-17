import "./LoadingSpinner.css";

function LoadingSpinner() {
    return (
        <div className="loading-spinner-overlay">
            <div className="loading-spinner">
                <div className="spinner-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>
    );
}

export default LoadingSpinner;
