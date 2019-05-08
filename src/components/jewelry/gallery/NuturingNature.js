import React, { Component } from "react";
import Navbar from "../../utility/Navbar";
import Slides from "../../utility/Slides";
import Block from "../../utility/Block";
import i11 from "../../../img/jewelry/gallery/nurturingNature/1/1.jpg";
import i12 from "../../../img/jewelry/gallery/nurturingNature/1/2.jpg";
import i13 from "../../../img/jewelry/gallery/nurturingNature/1/3.jpg";
import i14 from "../../../img/jewelry/gallery/nurturingNature/1/4.jpg";
import i21 from "../../../img/jewelry/gallery/nurturingNature/2/1.jpg";
import i22 from "../../../img/jewelry/gallery/nurturingNature/2/2.jpg";
import i31 from "../../../img/jewelry/gallery/nurturingNature/3/1.jpg";
import i32 from "../../../img/jewelry/gallery/nurturingNature/3/2.jpg";
import i41 from "../../../img/jewelry/gallery/nurturingNature/4/1.jpg";
import i42 from "../../../img/jewelry/gallery/nurturingNature/4/2.jpg";
import i51 from "../../../img/jewelry/gallery/nurturingNature/5/1.jpg";
import i52 from "../../../img/jewelry/gallery/nurturingNature/5/2.jpg";
import i53 from "../../../img/jewelry/gallery/nurturingNature/5/3.jpg";
import i61 from "../../../img/jewelry/gallery/nurturingNature/6/1.webp";
import i62 from "../../../img/jewelry/gallery/nurturingNature/6/2.webp";
import i63 from "../../../img/jewelry/gallery/nurturingNature/6/3.webp";
import i71 from "../../../img/jewelry/gallery/nurturingNature/7/1.jpg";
import i72 from "../../../img/jewelry/gallery/nurturingNature/7/2.jpg";
import i81 from "../../../img/jewelry/gallery/nurturingNature/8/1.jpg";
import i82 from "../../../img/jewelry/gallery/nurturingNature/8/2.jpg";
import i83 from "../../../img/jewelry/gallery/nurturingNature/8/3.jpg";
import i84 from "../../../img/jewelry/gallery/nurturingNature/8/4.jpg";
import i91 from "../../../img/jewelry/gallery/nurturingNature/9/1.jpg";
import i92 from "../../../img/jewelry/gallery/nurturingNature/9/2.jpg";
import i93 from "../../../img/jewelry/gallery/nurturingNature/9/3.jpg";
import i101 from "../../../img/jewelry/gallery/nurturingNature/10/1.webp";
import i102 from "../../../img/jewelry/gallery/nurturingNature/10/2.webp";
import i103 from "../../../img/jewelry/gallery/nurturingNature/10/3.webp";
import i104 from "../../../img/jewelry/gallery/nurturingNature/10/4.webp";
import i111 from "../../../img/jewelry/gallery/nurturingNature/11/1.jpg";
import i121 from "../../../img/jewelry/gallery/nurturingNature/12/1.jpg";

export default class NuturingNature extends Component {
    state = {
        items: [
            [i11, i12, i13, i14],
            [i21, i22],
            [i31, i32],
            [i41, i42],
            [i51, i52, i53],
            [i63, i62, i61],
            [i71, i72],
            [i81, i82, i83, i84],
            [i91, i92, i93],
            [i101, i102, i103, i104],
            [i111],
            [i121]
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
                        <h2 className="section-title">Nuturing Nature</h2>
                        <div className="bottom-line" />
                        <div className="items" />

                        <div className="slides">
                            {this.state.items.map((item, i) => (
                                <Slides
                                    key={i}
                                    src={item[0]}
                                    imgs={item}
                                    path="nuturingNature"
                                    title="Nuturing Nature"
                                    i={i}
                                />
                            ))}
                        </div>
                        <p className="my-5">
                            Nurturing Nature is inspired by city gardening. With
                            organic form breaking through or within the
                            geometric from, the new growing leaves of pruned
                            trees implied how people keep their personalities
                            when following the city rule. When I imitate natural
                            pattern and make it into jewelry pieces, it is also
                            my own way to nurture the nature. People wonder at
                            the texture or material in my designs. It is the
                            rebirth of natural elements, which leads people to
                            carefully gaze, question and think. Deconstructing
                            natural patterns, I take the original form and turn
                            it into a basic element; the pattern of a mushroom
                            becomes part of my language.
                        </p>
                    </div>
                </section>
            </Block>
        );
    }
}
