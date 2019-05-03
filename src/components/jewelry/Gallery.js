import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import illusion1 from "../../img/jewelry/gallery/illusion/illusion1.jpg";
import nn1 from "../../img/jewelry/gallery/nurturingNature/nn1.jpg";
import one1 from "../../img/jewelry/gallery/oneOfAKind/one1.jpg";
import Item from "../utility/Item";

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="collections" />
                    </div>
                </header>
                <section id="gallery" className="mb-4">
                    <div className="container">
                        <h2 className="section-title">My Gallery</h2>
                        <div className="bottom-line" />
                        <div className="items">
                            <Item src={illusion1} title="Illusion" to="/" />
                            <Item src={nn1} title="Nurturing Nature" to="/" />
                            <Item src={one1} title="One Of A Kind" to="/" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
