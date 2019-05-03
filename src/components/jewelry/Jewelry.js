import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import gallery from "../../img/jewelry/illusion.jpg";
import rendering from "../../img/jewelry/rendering.jpg";
import lookBook from "../../img/jewelry/lookBook.jpg";
import JewelryCategory from "./JewelryCategory";

export default class Jewelry extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="jewelry" />
                    </div>
                </header>
                <section id="jewelry">
                    <div className="container">
                        <h2 className="section-title">My Jewelries</h2>
                        <div className="bottom-line" />
                        <div id="collections">
                            <JewelryCategory
                                to="/gallery"
                                src={gallery}
                                title="Gallery"
                            />
                            <JewelryCategory
                                to="/rendering"
                                src={rendering}
                                title="Rendering"
                            />
                            <JewelryCategory
                                to="/lookBook"
                                src={lookBook}
                                title="Look Book"
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
