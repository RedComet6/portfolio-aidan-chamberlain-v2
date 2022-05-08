import React from "react";
import "../style.css";

// defines Footer tag element
function Footer() {
    // returns contents of Footer tag element
    return (
        // footer container
        <footer className="ai-c bgc-steelblue p w-100 ta-c@sm d-f@lrg">
            {/* div with ID so navigation link will jump to it */}
            <div id="my-links"></div>
            {/* title */}
            <div className="c-white fz-2">My Links:</div>
            {/* unordered list with my links, flexes at large browser size  */}
            <ul className="lis-n jc-se m0 p0 d-f@lrg mt@sm">
                {/* link to my pdf resume  */}
                <li className="mb-0p5@sm">
                    <a className="c-white fz-1p5 ml@lrg" href="./pdf/resume_Aidan_Chamberlain.pdf" target="_blank" rel="noreferrer">
                        My Resume
                    </a>
                </li>
                {/* link to my personal github  */}
                <li className="mb-0p5@sm">
                    <a className="c-white fz-1p5 ml@lrg" href="https://github.com/RedComet6" target="_blank" rel="noreferrer">
                        My GitHub
                    </a>
                </li>
                {/* link to my personal LinkedIn  */}
                <li className="mb-0p5@sm">
                    <a className="c-white fz-1p5 ml@lrg" href="https://www.linkedin.com/in/aidan-chamberlain-776b8b90" target="_blank" rel="noreferrer">
                        My LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
