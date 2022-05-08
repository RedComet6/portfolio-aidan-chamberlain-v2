import React from "react";
import "../style.css";

function AboutMe() {
    return (
        <section className="ai-c bgc-orange-50 d-b p w-100 d-f@lrg">
            {/* anchor for navigation put at top of section to assist in aligning when jumping */}
            <div id="about-me"></div>
            {/* division to group all text separate from personal photo to allow flex  */}
            <div>
                {/* <h2 className="fz-2 td-u">About Me:</h2> */}
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
                <p className="p t-i">
                    I will soon complete a Full-Stack Coding Bootcamp through Northwestern University, and will be actively seeking employment as a developer! My resume can be viewed from the links in the navigation and footer, I would love to hear any and all opportunities you may have to offer! You can view my works on this site; each example has a link to my code repository in addition to a link to the deployed application or walkthrough video. Please contact me at{" "}
                    <a href="mailto: achamberlain.dev@gmail.com" target="_blank" rel="noreferrer">
                        achamberlain.dev@gmail.com
                    </a>{" "}
                    or through my profiles at{" "}
                    <a href="https://github.com/RedComet6" target="_blank" rel="noreferrer">
                        GitHub
                    </a>{" "}
                    and{" "}
                    <a href="https://www.linkedin.com/in/aidan-chamberlain-776b8b90" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    . I appreciate your time taken to look through my corner of the internet, thank you!
                </p>
            </div>
            {/* image placed in division to facilitate styling, flex  */}
            <div className="ta-c">
                <img className="b-r-12 max-w-22 mt" src="./img/aidan-chamberlain.jpg" alt="a portrait of Aidan Chamberlain" />
            </div>
        </section>
    );
}
export default AboutMe;
