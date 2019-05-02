import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import gallery from "../../img/jewelry/jewelry.jpg";
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
                                <h3>Illusion</h3>
                            </div>
                            <div className="text-center">
                                <img src={gallery} alt="Gallery" />
                                <h3>Nurturing Nature</h3>
                            </div>
                            <div className="text-center">
                                <img src={gallery} alt="Gallery" />
                                <h3>One of a Kind</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
