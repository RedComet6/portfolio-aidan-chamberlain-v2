import React from "react";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <h2 class="navbar-brand">Aidan Chamberlain</h2>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#about-me">
                            About Me
                        </a>
                        <a class="nav-link" href="#">
                            My Works
                        </a>
                        <a class="nav-link" href="#">
                            My Links
                        </a>
                        <a class="nav-link" href="%PUBLIC_URL%/pdf/resume_Aidan_Chamberlain.pdf" target="_blank">
                            My Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
