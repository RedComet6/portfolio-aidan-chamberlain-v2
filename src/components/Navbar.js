import React from "react";
import "../style.css";

// defines Navbar tag element
function Navbar(props) {
    // returns contents of Navbar tag element
    return (
        // navbar container
        <nav className="b-b navbar navbar-expand-md bgc-slate c-white">
            {/* my bottom line info */}
            <div className="container-fluid">
                <div>
                    <h1>Aidan Chamberlain</h1>
                    <h4>
                        <a className="c-coral" href="mailto: achamberlain.dev@gmail.com" target="_blank" rel="noreferrer">
                            achamberlain.dev@gmail.com
                        </a>
                    </h4>
                </div>
                {/* container with ID */}
                <div id="navbarNavAltMarkup">
                    {/* container for links */}
                    <div className="navbar-nav">
                        {/* div with onClick handling page change to My Works */}
                        <div className="nav-link c-coral" onClick={() => props.onClick("my-works")}>
                            My Works
                        </div>
                        {/* div with onClick handling page change to About Me */}
                        <div className="nav-link c-coral" aria-current="page" onClick={() => props.onClick("about-me")}>
                            About Me
                        </div>
                        {/* link to view/download my pdf resume */}
                        <a className="nav-link c-coral" href="./pdf/resume_Aidan_Chamberlain.pdf" target="_blank">
                            My Resume
                        </a>
                        {/* link to my Github account */}
                        <a className="nav-link c-coral" href="https://github.com/RedComet6" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        {/* link to my LinkedIn Account */}
                        <a className="nav-link c-coral" href="https://www.linkedin.com/in/aidan-chamberlain-776b8b90" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
