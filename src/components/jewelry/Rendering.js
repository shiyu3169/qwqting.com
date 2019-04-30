import React, { Component } from "react";
import Navbar from "../utility/Navbar";

export default class Rendering extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="rendering" />
                    </div>
                </header>
            </div>
        );
    }
}
