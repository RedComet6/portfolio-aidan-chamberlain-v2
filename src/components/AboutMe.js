import React from "react";
import "../style.css";

// defines AboutMe tag element
function AboutMe() {
    // returns contents of AboutMe tag element
    return (
        // about me container
        <section className="ai-c bgc-slate d-b p w-100 d-f@lrg">
            {/* div to group elements efficiently when using display flex  */}
            <div className="c-white">
                {/* summary area for those not wishing to read much */}
                <h2>Summary</h2>
                <p className="py t-i">
                    {" "}
                    I am a full stack developer currently looking for employment! I recently graduated from Northwestern University's Full Stack Bootcamp and I am eager to start the next chapter in my career. Please take a look at my{" "}
                    <a href="./pdf/resume_Aidan_Chamberlain.pdf" target="_blank">
                        Resume
                    </a>
                    , I would love to hear any and everything you have to say even if it is just advice on how to improve. You can contact me anytime at{" "}
                    <a href="mailto: achamberlain.dev@gmail.com" target="_blank" rel="noreferrer">
                        achamberlain.dev@gmail.com
                    </a>{" "}
                    or through my{" "}
                    <a href="https://github.com/RedComet6" target="_blank" rel="noreferrer">
                        GitHub
                    </a>{" "}
                    and{" "}
                    <a href="https://www.linkedin.com/in/aidan-chamberlain-776b8b90" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>{" "}
                    accounts. Thank you for your time!
                </p>

                {/* more detailed info for those with a little time */}
                <h2 className="pt-5">Deeper Dive</h2>
                {/* my previous employment and education info  */}
                <p className="py t-i"> I graduated from Purdue University in May 2016 with a Bachelor of Technology in Computer Graphics. I began my career working in the internal design department of Archer Daniels Midland Company; a company that makes food, farm feed, and nutraceutical products. As a CAD Drafter, I performed mechanical and plumbing engineering design; please see my resume for a full summary of the responsibilities I performed.</p>

                {/* my current employment info  */}
                <p className="py t-i">
                    In 2018 I moved to the Chicago area and accepted a job in the Aviation and Federal Department of Burns & McDonnell Company, where I am currently employed. My department's primary clients are airports and the federal government, and I have worked on dozens of multi-million dollar engineering design projects all across the country. As a Mechanical Designer, I perform mechanical, electrical, plumbing, and some civil engineering design. I also have the title of CAD Coordinator on
                    most projects that I work on; this means I am in charge of coordinating everyone doing CAD work to ensure they adhere to standards, have access to all the tools they require, and are aware of current best practices. Again, please see my resume for a complete summary of my responsibilities.
                </p>

                {/* current job searching time info! please contact me by any of the means I have provided, thank you! */}
                <p className="py t-i">
                    I have completed the Full-Stack Coding Bootcamp through Northwestern University, and I am currently actively seeking employment as a developer! My resume can be viewed{" "}
                    <a href="./pdf/resume_Aidan_Chamberlain.pdf" target="_blank">
                        here
                    </a>
                    ; I would love to hear any and all opportunities you may have to offer! You can view a selection of my works on this site, and each example has a link to my code repository on Github in addition to a link to the deployed application or walkthrough video.
                </p>
                <p className="py t-i">
                    Please contact me anytime at{" "}
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

            {/* a pic of myself! image placed in division to facilitate styling, flex  */}
            <div className="ta-c">
                <img className="b-r-12 max-w-22 mt" src="./img/aidan-chamberlain.jpg" alt="a portrait of Aidan Chamberlain" />
            </div>
        </section>
    );
}
export default AboutMe;
