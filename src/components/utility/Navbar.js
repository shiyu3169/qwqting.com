import React, { Component } from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default class Navbar extends Component {
    state = {
        jewelries: [
            { text: "Gallery", to: "gallery" },
            { text: "Look Book", to: "lookBook" },
            { text: "Rendering", to: "rendering" }
        ]
    };

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
                            className={current === "jewelry" ? "current" : ""}
                            to="/jewelry"
                        >
                            Jewelry
                        </Link>
                        <Dropdown items={this.state.jewelries} />
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
                            className={current === "about" ? "current" : ""}
                            to="/about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
