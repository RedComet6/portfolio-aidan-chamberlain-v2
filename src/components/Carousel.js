import React from "react";
import "../style.css";

function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide bgc-orange-50 h-80vh" data-bs-ride="carousel">
            {/* <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
            <div className="carousel-inner">
                <div className="carousel-item active ta-c">
                    <h3 className="fs-i mt-3 td-u">Petrol Pirate</h3>
                    <p>App where users sign up, submit locations with low gas prices, and see submitted locations from other users (MySQL)</p>
                    <a href="https://hbs-project-two.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div>
                            <img src="./img/petrol-pirate-logo.gif" className="b b-c-black bgc-steelblue mal mar mt d-block h-20" alt="logo for the petrol pirate application" />
                        </div>
                    </a>
                    <a href="https://github.com/TeamHBs/petrol-pirate" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                    {/* <div className="carousel-caption"></div> */}
                </div>

                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Yakker</h3>
                    <p>Example of social network API (MongoDB)</p>
                    <a href="https://drive.google.com/file/d/1veM29Xn7lmnf8chnFY2IN_hcuNZFKQCe/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            <img src="./img/yakker-package.png" className="b b-c-black bgc-steelblue mal mar mt d-block h-20" alt="logo for the petrol pirate application" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/yakker" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bgc-steelblue" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon bgc-steelblue" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Carousel;
