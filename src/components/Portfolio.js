import React from "react";
import "../style.css";

function Portfolio(props) {
    if (props.page === "about-me") {
        return (
            <section className="ai-c bgc-orange-50 d-b p w-100 d-f@lrg">
                {/* anchor for navigation put at top of section to assist in aligning when jumping */}
                <div id="about-me"></div>
                {/* division to group all text separate from personal photo to allow flex  */}
                <div>
                    <h2 className="fz-2 td-u">About Me:</h2>
                    {/* previous employment and education info  */}
                    <p className="p t-i"> I graduated from Purdue University in May 2016 with a Bachelor of Technology in Computer Graphics. I began my career working in the internal design department of Archer Daniels Midland Company; a company that makes food, farm feed, and nutraceutical products. I performed mechanical, electrical, and plumbing (MEP) engineering design for projects all over the world including:</p>
                    {/* list of example locations I did work in  */}
                    <ul className="lis-bull-circ ml-4">
                        <li>United States of America</li>
                        <li>Canada</li>
                        <li>China</li>
                        <li>Brazil</li>
                    </ul>

                    {/* my current employment info  */}
                    <p className="p t-i">In 2018 I moved to the Chicago area and accepted a job in the Aviation and Federal Department of Burns & McDonnell Company, where I am currently employed. My department's primary clients are airports and the federal government, but we are not limited to the Chicago area. I have assisted in MEP design work at many locations including but not limited to:</p>
                    {/* list of example locations i do work in  */}
                    <ul className="lis-bull-circ ml-4">
                        <li>O'Hare International Airport (ORD)</li>
                        <li>Midway International Airport (MDW)</li>
                        <li>Dulles International Airport (IAD)</li>
                        <li>Oak Ridge National Laboratory (ORNL)</li>
                        <li>Argonne National Laboratory (ANL)</li>
                        <li>Fermi National Accelerator Laboratory (FNAL)</li>
                    </ul>

                    {/* disclaimer that this page will be updated as time goes by */}
                    <p className="p t-i">In addition to my day job, I am currently taking a coding bootcamp in pursuit of finding a job as a developer. I will be updating this webpage regularly with my new works, so please check in periodically if you do not see something you like the first time you visit. Thank you for stopping by my page!</p>
                </div>
                {/* image placed in division to facilitate styling, flex  */}
                <div className="ta-c">
                    <img className="b-r-12 max-w-22 mt" src="./img/aidan-chamberlain.jpg" alt="a portrait of Aidan Chamberlain" />
                </div>
            </section>
        );
    } else {
        return (
            <div id="carouselExampleCaptions" className="carousel slide bgc-orange-50" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/petrol-pirate-logo.gif" className="d-block w-50" alt="logo for the petrol pirate application" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}
export default Portfolio;
