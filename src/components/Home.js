import React, { Component } from "react";
import Navbar from "./utility/Navbar";
import Typer from "./utility/Typer";
import Work from "./Work";
import About from "./About";

export default class Home extends Component {
    render() {
        return (
            <div>
                <header id="header-home">
                    <div className="container">
                        <Navbar current="home" />
                        <div className="header-content">
                            <h1>
                                I Am Qiuting Wang
                                <br />
                                The{" "}
                                <Typer
                                    words={[
                                        "Jewelry Designer",
                                        "Jeweler",
                                        "Illustrator"
                                    ]}
                                />
                            </h1>
                            <a href="#work" className="btn-light my-4">
                                View My Work
                            </a>
                        </div>
                    </div>
                </header>
                <Work />
                <About />
                <footer id="main-footer">
                    <div className="footer-content container">
                        <p>Copyright &copy; 2019, All Rights Reserved</p>
                        <div className="social">
                            <i className="fab fa-twitter" />
                            <i className="fab fa-facebook" />
                            <i className="fab fa-instagram" />
                            <i className="fab fa-linkedin" />
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
