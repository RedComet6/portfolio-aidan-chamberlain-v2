// import "./App.css";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        setPage("about-me");
    }, []);

    const handlePage = (page) => {
        const newPage = page;
        setPage(newPage);
    };

    return (
        <div>
            <Navbar onClick={handlePage} />
            <Portfolio page={page} />
            <Footer />
        </div>
    );
}

export default App;
