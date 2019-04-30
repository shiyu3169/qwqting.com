import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Work extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <nav id="main-nav">
                            <img
                                src="img/logo.png"
                                alt="My portfolio"
                                id="logo"
                            />
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/work" className="current">
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link to="contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
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
                                    <img src="img/items/item1.png" alt="" />
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
                                    <img src="img/items/item2.png" alt="" />
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
                                    <img src="img/items/item3.png" alt="" />
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
                                    <img src="img/items/item4.png" alt="" />
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
                                    <img src="img/items/item5.png" alt="" />
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
                                    <img src="img/items/item6.png" alt="" />
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
                                    <img src="img/items/item7.png" alt="" />
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
                                    <img src="img/items/item8.png" alt="" />
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
                                    <img src="img/items/item9.png" alt="" />
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
