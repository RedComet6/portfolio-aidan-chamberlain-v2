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
                    <p>App where users sign up, submit locations with low gas prices, and see submitted locations from other users (MySQL Database)</p>
                    <a href="https://hbs-project-two.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div>
                            <img src="./img/petrol-pirate-logo.gif" className="b b-c-steelblue bgc-steelblue mal mar mt d-block h-20" alt="logo for the petrol pirate application" />
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
                    <p>Example of social network API (MongoDB Database)</p>
                    <a href="https://drive.google.com/file/d/1veM29Xn7lmnf8chnFY2IN_hcuNZFKQCe/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            <img src="./img/yakker-package.png" className="b b-c-steelblue bgc-steelblue mal mar mt d-block h-20" alt="screenshot of Yakker package.json" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/yakker" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>

                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Just Another Text Editor</h3>
                    <p>Example of a text editor Progressive Web App (IndexedDB Database)</p>
                    <a href="https://just-another-text-editor-arc.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div>
                            <img src="./img/jate-screenshot.png" className="b b-c-steelblue bgc-steelblue mal mar mt d-block h-20" alt="screenshot of JATE main view" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/just-another-text-editor" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>

                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">E-Commerce Backend</h3>
                    <p>Example of the backend of an E-Commerce site (MySQL Database)</p>
                    <a href="https://drive.google.com/file/d/1xh6pfz7Ra1NyIcB259eL292xy7u0GJ5D/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div>
                            <img src="./img/aidan-chamberlain-backend-ecommerce.png" className="b b-c-steelblue bgc-steelblue mal mar mt d-block h-20" alt="screenshot of backend ecommerce example response" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/back-end-Ecommerce" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>

                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Technology Blog</h3>
                    <p>Example of a blog site (MySQL Database)</p>
                    <a href="https://chamberlain-blog-site.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div>
                            <img src="./img/tech-blog-aidan-chamberlain.png" className="b b-c-steelblue bgc-steelblue mal mar mt d-block h-20" alt="screenshot of backend ecommerce example response" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/technology-blog" target="_blank" rel="noreferrer">
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
