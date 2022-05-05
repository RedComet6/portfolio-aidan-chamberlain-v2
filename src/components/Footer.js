import React from "react";
import "../style.css";

function Footer() {
    return (
        <footer className="ai-c bgc-blue-900 p w-100 ta-c@sm d-f@lrg">
            {/* anchor for navigation put at top of footer to assist in aligning when jumping */}
            <div id="my-links"></div>
            <div className="c-white fz-2">My Links:</div>
            {/* unordered list with my links, flexes at large browser size  */}
            <ul className="lis-n jc-se m0 p0 d-f@lrg mt@sm">
                {/* link to pdf in assets folder  */}
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
