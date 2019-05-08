import React, { Component } from "react";
import Navbar from "../utility/Navbar";
import Item from "../utility/Item";
import i1 from "../../img/illustration/i1.jpg";
import i2 from "../../img/illustration/i2.jpg";
import i3 from "../../img/illustration/i3.jpg";
import i4 from "../../img/illustration/i4.jpg";
import i5 from "../../img/illustration/i5.jpg";
import i6 from "../../img/illustration/i6.jpg";
import i7 from "../../img/illustration/i7.jpg";
import i8 from "../../img/illustration/i8.jpg";
import i9 from "../../img/illustration/i9.jpg";

export default class Illustration extends Component {
    state = {
        items: [
            { src: i1, title: "untitled", to: "/" },
            { src: i2, title: "untitled", to: "/" },
            { src: i3, title: "untitled", to: "/" },
            { src: i4, title: "untitled", to: "/" },
            { src: i5, title: "untitled", to: "/" },
            { src: i6, title: "untitled", to: "/" },
            { src: i7, title: "untitled", to: "/" },
            { src: i8, title: "untitled", to: "/" },
            { src: i9, title: "untitled", to: "/" }
        ]
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
                        <h2 className="section-title">My Illustrations</h2>
                        <div className="bottom-line" />
                        <div className="items">
                            {this.state.items.map(item => (
                                <Item
                                    key={item.src}
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
