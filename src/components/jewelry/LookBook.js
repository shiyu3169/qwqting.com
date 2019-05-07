import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import Item from "../utility/Item";
import flowerRain from "../../img/jewelry/lookBook/flowerRain.jpg";
import illusion from "../../img/jewelry/lookBook/illusion.jpg";
import silence from "../../img/jewelry/lookBook/silence.jpg";

export default class LookBook extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="jewelry" />
                    </div>
                </header>
                <section id="lookBook" className="mb-4">
                    <div className="container">
                        <h2 className="section-title">My Renderings</h2>
                        <div className="bottom-line" />
                        <div className="items">
                            <Item src={flowerRain} title="Flower Rain" to="/" />
                            <Item src={silence} title="Silence" to="/" />
                            <Item src={illusion} title="Illusion" to="/" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
