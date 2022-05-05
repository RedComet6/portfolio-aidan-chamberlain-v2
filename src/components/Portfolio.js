import React from "react";

function Portfolio() {
    return (
        <section class="ai-c d-b mt p w-100 d-f@lrg">
            {/* anchor for navigation put at top of section to assist in aligning when jumping */}
            <a id="about-me"></a>
            {/* division to group all text separate from personal photo to allow flex  */}
            <div>
                <h2 class="fz-2 td-u">
                    About Me:
                    {/* anchor for navigation put at top of section to assist in aligning when jumping  */}
                    <a id="about-me"></a>
                </h2>
                {/* previous employment and education info  */}
                <p class="p t-i"> I graduated from Purdue University in May 2016 with a Bachelor of Technology in Computer Graphics. I began my career working in the internal design department of Archer Daniels Midland Company; a company that makes food, farm feed, and nutraceutical products. I performed mechanical, electrical, and plumbing (MEP) engineering design for projects all over the world including:</p>
                {/* list of example locations I did work in  */}
                <ul class="lis-bull-circ ml-4">
                    <li>United States of America</li>
                    <li>Canada</li>
                    <li>China</li>
                    <li>Brazil</li>
                </ul>

                {/* my current employment info  */}
                <p class="p t-i">In 2018 I moved to the Chicago area and accepted a job in the Aviation and Federal Department of Burns & McDonnell Company, where I am currently employed. My department's primary clients are airports and the federal government, but we are not limited to the Chicago area. I have assisted in MEP design work at many locations including but not limited to:</p>
                {/* list of example locations i do work in  */}
                <ul class="lis-bull-circ ml-4">
                    <li>O'Hare International Airport (ORD)</li>
                    <li>Midway International Airport (MDW)</li>
                    <li>Dulles International Airport (IAD)</li>
                    <li>Oak Ridge National Laboratory (ORNL)</li>
                    <li>Argonne National Laboratory (ANL)</li>
                    <li>Fermi National Accelerator Laboratory (FNAL)</li>
                </ul>

                {/* disclaimer that this page will be updated as time goes by */}
                <p class="p t-i">In addition to my day job, I am currently taking a coding bootcamp in pursuit of finding a job as a developer. I will be updating this webpage regularly with my new works, so please check in periodically if you do not see something you like the first time you visit. Thank you for stopping by my page!</p>
            </div>
            {/* image placed in division to facilitate styling, flex  */}
            <div class="ta-c">
                <img class="b-r-12 max-w-22 mt" src="./assets/images/aidan-chamberlain.jpg" alt="a portrait of Aidan Chamberlain" />
            </div>
        </section>
    );
}
export default Portfolio;
