import React, { Component } from "react";
import Navbar from "./utility/Navbar";
import item1 from "../img/items/item1.png";
import item2 from "../img/items/item2.png";
import item3 from "../img/items/item3.png";
import item4 from "../img/items/item4.png";
import item5 from "../img/items/item5.png";
import item6 from "../img/items/item6.png";
import item7 from "../img/items/item7.png";
import item8 from "../img/items/item8.png";
import item9 from "../img/items/item9.png";

export default class Work extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="work" />
                    </div>
                </header>
                <section id="work-a" className="text-center py-3">
                    <div className="container">
                        <h2 className="section-title">My Work</h2>
                        <div className="bottom-line" />
                        <p className="lead">Check out some of my works</p>
                        <div className="items">
                            <div className="item">
                                <div className="item-image">
                                    <img src={item1} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Design
                                        </p>
                                        <h2 className="item-text-title">
                                            Great Gradients
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item2} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Jewelry Work
                                        </p>
                                        <h2 className="item-text-title">
                                            World Experience
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item3} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Photography & Design
                                        </p>
                                        <h2 className="item-text-title">
                                            Vanishing
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item4} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Design
                                        </p>
                                        <h2 className="item-text-title">
                                            Gap INC
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item5} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Jewlry Work
                                        </p>
                                        <h2 className="item-text-title">
                                            Face The Experience
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item6} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Jewelry Design
                                        </p>
                                        <h2 className="item-text-title">
                                            Bezier Curves
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item7} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Photography
                                        </p>
                                        <h2 className="item-text-title">
                                            Dock Ponder
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item8} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Illustration
                                        </p>
                                        <h2 className="item-text-title">
                                            Restaurant App
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-image">
                                    <img src={item9} alt="" />
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">
                                            Chinese Painting
                                        </p>
                                        <h2 className="item-text-title">
                                            Friend Feed
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="main-footer">
                    <div className="footer-content container">
                        <p>Copyright &copy; 2019, All Rights Reserved</p>
                        <div className="social">
                            <i className="fab fa-twitter" />
                            <i className="fab fa-facebook" />
                            <i className="fab fa-instagram" />
                            <i className="fab fa-linkedin" />
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
