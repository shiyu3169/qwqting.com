import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import Item from "../utility/Item";
import digital from "../../img/jewelry/rendering/digital.jpg";
import traditional from "../../img/jewelry/rendering/traditional.jpg";

export default class Rendering extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="jewelry" />
                    </div>
                </header>
                <section id="rendering" className="mb-4">
                    <div className="container">
                        <h2 className="section-title">My Renderings</h2>
                        <div className="bottom-line" />
                        <div className="items">
                            <Item src={digital} title="Digital" to="/" />
                            <Item
                                src={traditional}
                                title="Traditional"
                                to="/"
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
