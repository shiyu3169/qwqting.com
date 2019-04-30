import React, { Component } from "react";
import Navbar from "../utility/Navbar";

export default class Illustration extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="illustration" />
                    </div>
                </header>
            </div>
        );
    }
}
