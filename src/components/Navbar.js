import React from "react";
import "../style.css";

// defines Navbar tag element
function Navbar(props) {
    // returns contents of Navbar tag element
    return (
        // navbar container
        <nav className="navbar navbar-expand-md bgc-steelblue c-white">
            {/* my bottom line info */}
            <div className="container-fluid">
                <div>
                    <h2>Aidan Chamberlain</h2>
                    <h4>
                        Email:{" "}
                        <a className="c-white" href="mailto: achamberlain.dev@gmail.com" target="_blank" rel="noreferrer">
                            achamberlain.dev@gmail.com
                        </a>
                    </h4>
                </div>
                {/* container with ID */}
                <div id="navbarNavAltMarkup">
                    {/* container for links */}
                    <div className="navbar-nav">
                        {/* div with onClick handling page change to About Me */}
                        <div className="nav-link c-white" aria-current="page" onClick={() => props.onClick("about-me")}>
                            About Me
                        </div>
                        {/* div with onClick handling page change to My Works */}
                        <div className="nav-link c-white" onClick={() => props.onClick("my-works")}>
                            My Works
                        </div>
                        {/* link to My Links at bottom of site */}
                        <a className="nav-link c-white" href="#my-links">
                            My Links
                        </a>
                        {/* link to view/download my pdf resume */}
                        <a className="nav-link c-white" href="./pdf/resume_Aidan_Chamberlain.pdf" target="_blank">
                            My Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
