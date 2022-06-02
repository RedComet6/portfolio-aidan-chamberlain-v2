import React from "react";
import "../style.css";

// defines Carousel tag element
function Carousel() {
    // returns contents of Carousel tag element
    return (
        // div container for whole carousel
        <div id="carouselExampleCaptions" className="carousel slide bgc-slate h-90vh" data-bs-ride="carousel">
            {/* div containing the project "Cards" */}
            <div className="carousel-inner c-white">
                {/* div containing Gamerz Statz project */}
                <div className="carousel-item active ta-c">
                    <h3 className="fs-i mt-3 td-u">Gamerz Statz</h3>
                    <p>React App where users sign up with their Xbox live gamertag and can then view achievement information for games they have played. Users can also choose a specific game and be shown their achievement stats for that game charted against an Xbox Live friend of their choice (MySQL Database, Xbox Live API)</p>
                    <a href="https://gamerzstatz.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/gamerzstatz.png" className="bgc-steelblue mal mar mt d-block h-20" alt="screenshot of Gamerz Statz homepage" />
                        </div>
                    </a>
                    <a href="https://github.com/Its-The-S/gamerzstatz" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
                {/* div containing Petrol Pirate project */}
                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Petrol Pirate</h3>
                    <p>App where users sign up, submit locations where they have seen low gas prices, and can view submitted locations from other users (MySQL Database)</p>
                    <a href="https://hbs-project-two.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/petrol-pirate-logo.gif" className="bgc-steelblue mal mar mt d-block h-20" alt="logo for the petrol pirate application" />
                        </div>
                    </a>
                    <a href="https://github.com/TeamHBs/petrol-pirate" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
                {/* div containing Yakker project */}
                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Yakker</h3>
                    <p>Example of social network API (MongoDB Database)</p>
                    <a href="https://drive.google.com/file/d/1veM29Xn7lmnf8chnFY2IN_hcuNZFKQCe/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/yakker-package.png" className="bgc-steelblue mal mar mt d-block h-20" alt="screenshot of Yakker package.json" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/yakker" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
                {/* div containing Just Another Text Editor project */}
                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Just Another Text Editor</h3>
                    <p>A text editor Progressive Web App (IndexedDB Database)</p>
                    <a href="https://just-another-text-editor-arc.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/jate-screenshot.png" className="bgc-steelblue mal mar mt d-block h-20" alt="screenshot of JATE main view" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/just-another-text-editor" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
                {/* div containing E-Commerce Backend project */}
                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">E-Commerce Backend</h3>
                    <p>Example of the backend of an E-Commerce site (MySQL Database)</p>
                    <a href="https://drive.google.com/file/d/1xh6pfz7Ra1NyIcB259eL292xy7u0GJ5D/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/aidan-chamberlain-backend-ecommerce.png" className="bgc-steelblue mal mar mt d-block h-20" alt="screenshot of backend ecommerce example response" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/back-end-Ecommerce" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
                {/* div containing Tech Blog project */}
                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Technology Blog</h3>
                    <p>Example of a blog site (MySQL Database)</p>
                    <a href="https://chamberlain-blog-site.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/tech-blog-aidan-chamberlain.png" className="bgc-steelblue mal mar mt d-block h-20" alt="screenshot of the tech blog homepage" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/technology-blog" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
                {/* div containing Employee Tracker project */}
                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Employee Tracker</h3>
                    <p>A command line interface app that tracks the organization of a company (MySQL Database)</p>
                    <a href="https://drive.google.com/file/d/1Jtk7xf51-DPdPhR_VmKMc5q-KDxnts_M/view?usp=sharing" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/screenshot-employee-tracker-aidan-chamberlain.png" className="bgc-steelblue mal mar mt d-block h-20" alt="screenshot of the command line displaying employee information" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/employee-tracker" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
                {/* div containing Note Taker project */}
                <div className="carousel-item ta-c">
                    <h3 className="fs-i mt-3 td-u">Note Taker</h3>
                    <p>A note taking app that uses a .JSON file as the database (File System Database)</p>
                    <a href="https://aidan-chamberlain-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">
                        <div className="mb">
                            <img src="./img/aidan-chamberlain-note-taker-screenshot.png" className="bgc-steelblue mal mar mt d-block h-20" alt="screenshot of the note taker with some example notes" />
                        </div>
                    </a>
                    <a href="https://github.com/RedComet6/note-taker" target="_blank" rel="noreferrer">
                        {" "}
                        ⏎ Go to the GitHub Repo
                    </a>
                </div>
            </div>
            {/* previous button, handles manually moving backwards through carousel */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bgc-coral" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            {/* next button, handles manually moving backwards through carousel */}
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon bgc-coral" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Carousel;
