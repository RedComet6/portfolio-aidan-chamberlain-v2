import React from "react";
import AboutMe from "../components/AboutMe";
import Carousel from "./Carousel";
import "../style.css";

function Portfolio(props) {
    if (props.page === "about-me") {
        return <AboutMe />;
    } else {
        return <Carousel />;
    }
}
export default Portfolio;
