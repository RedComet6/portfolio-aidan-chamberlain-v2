import React from "react";
import AboutMe from "../components/AboutMe";
import Carousel from "./Carousel";
import "../style.css";

// defines Portfolio tag element
function Portfolio(props) {
    // if statement to determine which page to display
    if (props.page === "about-me") {
        return <AboutMe />;
    } else {
        return <Carousel />;
    }
}
export default Portfolio;
