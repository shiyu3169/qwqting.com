import React, { Component, Fragment } from "react";
import Navbar from "../../utility/Navbar";
import illusion1 from "../../../img/jewelry/gallery/illusion/illusion1.jpg";
import nn1 from "../../../img/jewelry/gallery/nurturingNature/nn1.jpg";
import one1 from "../../../img/jewelry/gallery/oneOfAKind/one1.jpg";
import Item from "../../utility/Item";

export default class Gallery extends Component {
    render() {
        return (
            <Fragment>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="jewelry" />
                    </div>
                </header>
                <section id="gallery">
                    <div className="container">
                        <h2 className="section-title">My Gallery</h2>
                        <div className="bottom-line" />
                        <div className="items mt-4">
                            <Item
                                src={illusion1}
                                title="Illusion"
                                to="/illusion"
                            />
                            <Item
                                src={nn1}
                                title="Nurturing Nature"
                                to="/collection/nurturing_nature"
                            />
                            <Item
                                src={one1}
                                title="One Of A Kind"
                                to="/collection/one_of_a_kind"
                            />
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
