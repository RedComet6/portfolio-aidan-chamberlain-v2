// import "./App.css";
import React, { useState, useEffect } from "react";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

// defines App tag element
function App() {
    // create page state for replacing content with react
    const [page, setPage] = useState([]);

    // initialize page to be about-me on first load
    useEffect(() => {
        setPage("carousel");
    }, []);

    // updates page state on choosing a new page in navigation
    const handlePage = (page) => {
        const newPage = page;
        setPage(newPage);
    };

    // returns contents of App tag element
    return (
        <div>
            <Navbar onClick={handlePage} />
            <Portfolio page={page} />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
