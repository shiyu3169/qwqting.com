import React, { Component } from "react";
import about from "../img/about.jpg";
import Contact from "./Contact";

export default class About extends Component {
    render() {
        return (
            <div>
                <section id="about-a" className="text-center py-3">
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className="bottom-line" />
                        <div className="about-info">
                            <img
                                src={about}
                                alt="Qiuting"
                                className="bio-image"
                            />
                            <div className="bio bg-light">
                                <p>
                                    Originally from Chengdu, China, I majored in
                                    jewelry with a Bachelor of Fine Arts at the
                                    Savannah College of Art and Design. I have
                                    been learning drawing and painting since
                                    childhood. With the inspiration from
                                    painting and nature, my jewelry design
                                    expresses a sense of Chinese style through
                                    contemporary design. The beauty of nature is
                                    eternal. No matter whether the human body or
                                    botanical specimens, the natural form and
                                    curvature of line always bring great
                                    interest and a sense of beauty. This path
                                    has allowed me to create jewelry as a
                                    three-dimensional painting and share my view
                                    of timeless beauty with people who love
                                    jewelry as art.​
                                </p>
                            </div>
                            <div className="award-1">
                                <i className="fas fa-award fa-3x" />
                                <h5>
                                    SJTA Atlanta Jewelry Show - Ring category
                                </h5>
                                <h1>3rd</h1>
                            </div>
                            <div className="award-2">
                                <i className="fas fa-award fa-3x" />

                                <h5>SCAD Rendering Competition</h5>
                                <h1>1st</h1>
                            </div>
                            <div className="award-3">
                                <i className="fas fa-award fa-3x" />
                                <h5>
                                    SJTA Atlanta Jewelry Show - Earring category
                                </h5>
                                <h1>3rd</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <Contact />
            </div>
        );
    }
}
