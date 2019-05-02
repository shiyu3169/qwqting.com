import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import illusion1 from "../../img/jewelry/gallery/illusion/illusion1.jpg";
import nn1 from "../../img/jewelry/gallery/nurturingNature/nn1.jpg";
import one1 from "../../img/jewelry/gallery/oneOfAKind/one1.jpg";

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="collections" />
                    </div>
                </header>
                <div>
                    <section className="container">
                        <h2 className="section-title">My Gallery</h2>
                        <div className="bottom-line" />
                        <div className="items">
                            <div className="item">
                                <div className="item-image">
                                    <img src={illusion1} alt="Illusion" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <h2 className="item-text-title">
                                            Illusion
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={nn1} alt="Nurturing Nature" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <h2 className="item-text-title">
                                            Nurturing Nature
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={one1} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <h2 className="item-text-title">
                                            One Of A Kind
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
