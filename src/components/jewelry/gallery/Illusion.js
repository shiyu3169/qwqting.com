import React, { Component, Fragment } from "react";
import Navbar from "../../utility/Navbar";
import Slides from "../../utility/Slides";
import i11 from "../../../img/jewelry/gallery/illusion/1/1.webp";
import i12 from "../../../img/jewelry/gallery/illusion/1/2.webp";
import i13 from "../../../img/jewelry/gallery/illusion/1/3.webp";
import i21 from "../../../img/jewelry/gallery/illusion/2/2-1.webp";
import i22 from "../../../img/jewelry/gallery/illusion/2/2-2.webp";
import i23 from "../../../img/jewelry/gallery/illusion/2/2-3.webp";
import i31 from "../../../img/jewelry/gallery/illusion/3/3-1.jpg";
import i32 from "../../../img/jewelry/gallery/illusion/3/3-2.jpg";
import i41 from "../../../img/jewelry/gallery/illusion/4/4-1.webp";
import i42 from "../../../img/jewelry/gallery/illusion/4/4-2.webp";
import i51 from "../../../img/jewelry/gallery/illusion/5/1.jpg";
import i52 from "../../../img/jewelry/gallery/illusion/5/2.jpg";
import i61 from "../../../img/jewelry/gallery/illusion/6/1.jpg";
import i62 from "../../../img/jewelry/gallery/illusion/6/2.jpg";
import i63 from "../../../img/jewelry/gallery/illusion/6/3.jpg";
import i64 from "../../../img/jewelry/gallery/illusion/6/4.jpg";
import i71 from "../../../img/jewelry/gallery/illusion/7/1.jpg";
import i72 from "../../../img/jewelry/gallery/illusion/7/2.jpg";
import i73 from "../../../img/jewelry/gallery/illusion/7/3.jpg";
import i81 from "../../../img/jewelry/gallery/illusion/8/1.webp";
import i82 from "../../../img/jewelry/gallery/illusion/8/2.jpg";

export default class Illusion extends Component {
    state = {
        items: [
            [i11, i12, i13],
            [i21, i22, i23],
            [i31, i32],
            [i41, i42],
            [i51, i52],
            [i61, i62, i63, i64],
            [i71, i72, i73],
            [i81, i82]
        ]
    };
    render() {
        return (
            <Fragment>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="jewelry" />
                    </div>
                </header>
                <section>
                    <div className="container">
                        <h2 className="section-title">Illusion</h2>
                        <div className="bottom-line" />
                        <div className="items" />
                    </div>
                    <div className="container mb-4">
                        <div className="slides">
                            {this.state.items.map((item, i) => (
                                <Slides key={i} src={item[0]} />
                            ))}
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
