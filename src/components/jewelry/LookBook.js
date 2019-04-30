import React, { Component } from "react";
import Navbar from "../utility/Navbar";

export default class LookBook extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="lookBook" />
                    </div>
                </header>
            </div>
        );
    }
}
