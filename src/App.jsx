import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InProgress from "./components/InProgress";
import Homepageinprogress from "./components/Homepageinprogress";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <main className="main-content">
                    <Routes>
                        {/* The video splash screen route */}
                        <Route path="/" element={<InProgress />} />

                        {/* The actual home page route after video ends */}
                        <Route path="/home" element={<Homepageinprogress />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
