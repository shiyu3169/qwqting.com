import React, { Component } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        const { current } = this.props;
        return (
            <nav id="main-nav">
                <img src={logo} alt="My portfolio" id="logo" />
                <ul>
                    <li>
                        <Link
                            className={current === "home" ? "current" : ""}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={current === "about" ? "current" : ""}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={current === "gallery" ? "current" : ""}
                            to="/gallery"
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={current === "rendering" ? "current" : ""}
                            to="/rendering"
                        >
                            Rendering
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={current === "lookbook" ? "current" : ""}
                            to="/lookBook"
                        >
                            Look Book
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={
                                current === "illustration" ? "current" : ""
                            }
                            to="/illustration"
                        >
                            Illustration
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={current === "contact" ? "current" : ""}
                            to="contact"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
