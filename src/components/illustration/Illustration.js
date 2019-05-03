import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import Item from "../utility/Item";

export default class Illustration extends Component {
    state = {
        items: []
    };

    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="illustration" />
                    </div>
                </header>
                <section id="illusion" className="mb-4">
                    <div className="container">
                        <h2 className="section-title">My Gallery</h2>
                        <div className="bottom-line" />
                        <div className="items">
                            {this.state.items.map(item => (
                                <Item
                                    src={item.src}
                                    title={item.title}
                                    to={item.to}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
