import React from "react";
import "../style.css";

function Navbar(props) {
    // const changePage = () => {};
    return (
        <nav className="navbar navbar-expand-md bgc-steelblue c-white">
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
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="nav-link c-white" aria-current="page" onClick={() => props.onClick("about-me")}>
                            About Me
                        </div>
                        <div className="nav-link c-white" onClick={() => props.onClick("my-works")}>
                            My Works
                        </div>
                        <a className="nav-link c-white" href="#my-links">
                            My Links
                        </a>
                        <a className="nav-link c-white" href="./pdf/resume_Aidan_Chamberlain.pdf" target="_blank">
                            My Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        // <nav className="ai-c bgc-blue-900 jc-sb p1 pos-f-t d-f@lrg">
        //     {/* division to group name with avatar photo  */}
        //     <div className="c-white ff-verdana ta-c@sm">
        //         <h1 className="fz-2">AIDAN CHAMBERLAIN</h1>
        //         <p className="fz-1 mt-0p5 mb-0p5">Email: asunshine99@gmail.com</p>
        //     </div>
        //     {/* unordered list separate from division to allow flex  */}
        //     {/* unordered list to group navigation anchors  */}
        //     <ul className="lis-n m0 p0 d-f@lrg">
        //         {/* jumps to About Me section  */}
        //         <li className="mt-0p5 mb-0p5 ta-c ml@lrg">
        //             <a className="c-white fz-1p5" href="#about-me">
        //                 About Me
        //             </a>
        //         </li>
        //         {/* jumps to My Works section  */}
        //         <li className="mt-0p5 mb-0p5 ta-c ml@lrg">
        //             <a className="c-white fz-1p5" href="#my-works">
        //                 My Works
        //             </a>
        //         </li>
        //         {/* jumps to My Links section  */}
        //         <li className="mt-0p5 mb-0p5 ta-c ml@lrg">
        //             <a className="c-white fz-1p5" href="#my-links">
        //                 My Links
        //             </a>
        //         </li>
        //     </ul>
        // </nav>
    );
}
export default Navbar;
