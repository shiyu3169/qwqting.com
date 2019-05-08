import React, { Component } from "react";
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
import Block from "../../utility/Block";

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
            <Block>
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

                        <div className="slides">
                            {this.state.items.map((item, i) => (
                                <Slides
                                    key={i}
                                    src={item[0]}
                                    imgs={item}
                                    path="illusion"
                                    title="ILLUSION"
                                    i={i}
                                />
                            ))}
                        </div>
                        <p className="my-5">
                            This collection is derived from Nuturing Nature
                            which is inspired by city gardening. With organic
                            form breaking through the geometric structure, the
                            work alludes to new growth extending from the body.
                            The fabric acts as a casing but allows the viewer to
                            see the seeds inside. From the outside there is
                            order, but the interior shows difference in the same
                            way personalities shine in an orderly city.
                            Imitating natural patterns to create jewelry is my
                            own way to nurture the nature.
                        </p>
                    </div>
                </section>
            </Block>
        );
    }
}
