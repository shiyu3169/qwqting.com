import React, { Component } from "react";
import Navbar from "./utility/Navbar";
import Typer from "./utility/Typer";
import Work from "./Work";

export default class Home extends Component {
    render() {
        return (
            <div>
                <header id="header-home">
                    <div className="container">
                        <Navbar current="home" />
                        <div className="header-content">
                            <h1>
                                Qiuting Wang
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
                            <div>
                                <a href="#work" className="btn-light">
                                    View My Work
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <Work />
            </div>
        );
    }
}
