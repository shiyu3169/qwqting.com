import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import gallery from "../../img/jewelry/illusion.jpg";
import rendering from "../../img/jewelry/rendering.jpg";
import lookBook from "../../img/jewelry/lookBook.jpg";

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
                            <div className="text-center">
                                <img src={gallery} alt="Gallery" />
                                <h3>Gallery</h3>
                            </div>
                            <div className="text-center">
                                <img src={rendering} alt="Gallery" />
                                <h3>Rendering</h3>
                            </div>
                            <div className="text-center">
                                <img src={lookBook} alt="Gallery" />
                                <h3>Look Book</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
