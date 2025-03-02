import React from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
// import Home from "./Home/Home";
// import Collections from "./Collections/Collections";
// import Contact from "./Conatct_Me/Contact";
// import Blog from "./Blog/Blog";
// import { Orders } from "./Orders/Orders";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                {/* <Routes> */}
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/orders" element={<Orders />} /> */}
                {/* </Routes> */}
            </Router>
        </div>
    );
}

export default App;
