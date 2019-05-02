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
                <div className="my-4">
                    <section className="container">
                        <div class="items">
                            <div class="item">
                                <div class="item-image">
                                    <img src={illusion1} alt="Illusion" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <h2 class="item-text-title">
                                            Illusion
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item-image">
                                    <img src={nn1} alt="Nurturing Nature" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <h2 class="item-text-title">
                                            Nurturing Nature
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="item-image">
                                    <img src={one1} alt="" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <h2 class="item-text-title">
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
