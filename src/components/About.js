import React, { Component } from "react";
import about from "../img/about.jpg";
import envato from "../img/about-logos/logo-envato.png";
import magento from "../img/about-logos/logo-magento.png";
import woocommerce from "../img/about-logos/logo-woocommerce.png";
import wordpress from "../img/about-logos/logo-wordpress.png";
import person1 from "../img/testimonials/person1.jpg";
import person2 from "../img/testimonials/person2.jpg";
import person3 from "../img/testimonials/person3.jpg";
import person4 from "../img/testimonials/person4.jpg";
import Navbar from "./utility/Navbar";

export default class About extends Component {
    render() {
        return (
            <div>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="about" />
                    </div>
                </header>
                <section id="about-a" className="text-center py-3">
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className="bottom-line" />
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat, ducimus!
                        </p>
                        <div className="about-info">
                            <img
                                src={about}
                                alt="Qiuting"
                                className="bio-image"
                            />
                            <div className="bio bg-light">
                                <h4>Lorem ipsum dolor sit amet.</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Totam doloribus nisi
                                    maiores aspernatur modi ratione architecto
                                    officia sunt suscipit! Ad tempore magni nam
                                    quos eligendi natus sit quod reprehenderit
                                    eos.
                                </p>
                            </div>
                            <div className="award-1">
                                <i className="fas fa-award fa-3x" />
                                <h3>Award One</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sint, maiores.
                                </p>
                            </div>
                            <div className="award-2">
                                <i className="fas fa-award fa-3x" />
                                <h3>Award Two</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sint, maiores.
                                </p>
                            </div>
                            <div className="award-3">
                                <i className="fas fa-award fa-3x" />
                                <h3>Award Three</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sint, maiores.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about-b" className="bg-dark py-3">
                    <div className="container">
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="bottom-line" />
                        <h4>Jewelry Making (Casting):</h4>
                        <div className="progress">
                            <div style={{ width: "100%" }} />
                        </div>
                        <h4>Jewlry Design(Rhino/Matrix):</h4>
                        <div className="progress">
                            <div style={{ width: "100%" }} />
                        </div>
                        <h4>Adobe Photoshop:</h4>
                        <div className="progress">
                            <div style={{ width: "80%" }} />
                        </div>
                        <h4>Adobe Illustrator:</h4>
                        <div className="progress">
                            <div style={{ width: "70%" }} />
                        </div>
                        <h4>Photography:</h4>
                        <div className="progress">
                            <div style={{ width: "70%" }} />
                        </div>
                        <h4>Adobe After Effects:</h4>
                        <div className="progress">
                            <div style={{ width: "50%" }} />
                        </div>
                    </div>
                </section>
                <section id="about-c" className="py-4 bg-light">
                    <div className="container">
                        <div className="about-logos">
                            <img src={envato} alt="" />
                            <img src={wordpress} alt="" />
                            <img src={woocommerce} alt="" />
                            <img src={magento} alt="" />
                        </div>
                    </div>
                </section>
                <section id="about-d" className="py-4">
                    <div className="container">
                        <h2 className="section-title">Testimonials</h2>
                        <div className="bottom-line" />
                        <p className="lead text-center">
                            Take a look at what my clients say...
                        </p>
                        <div className="testimonials">
                            <div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Explicabo molestias natus
                                    repellendus tempora in, illo pariatur
                                    asperiores mollitia odio reprehenderit
                                    consequuntur ipsa maiores provident ullam
                                    porro! Voluptatibus voluptatem soluta
                                    sapiente?
                                </p>
                                <ul>
                                    <li>
                                        <img src={person1} alt="Sam" />
                                    </li>
                                    <li>Sam Smith, New York</li>
                                </ul>
                            </div>
                            <div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Explicabo molestias natus
                                    repellendus tempora in, illo pariatur
                                    asperiores mollitia odio reprehenderit
                                    consequuntur ipsa maiores provident ullam
                                    porro! Voluptatibus voluptatem soluta
                                    sapiente?
                                </p>
                                <ul>
                                    <li>
                                        <img src={person2} alt="Sara" />
                                    </li>
                                    <li>Sara Williams, Michigan</li>
                                </ul>
                            </div>
                            <div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Explicabo molestias natus
                                    repellendus tempora in, illo pariatur
                                    asperiores mollitia odio reprehenderit
                                    consequuntur ipsa maiores provident ullam
                                    porro! Voluptatibus voluptatem soluta
                                    sapiente?
                                </p>
                                <ul>
                                    <li>
                                        <img src={person3} alt="Jill" />
                                    </li>
                                    <li>Jill Johnson, London</li>
                                </ul>
                            </div>
                            <div>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Explicabo molestias natus
                                    repellendus tempora in, illo pariatur
                                    asperiores mollitia odio reprehenderit
                                    consequuntur ipsa maiores provident ullam
                                    porro! Voluptatibus voluptatem soluta
                                    sapiente?
                                </p>
                                <ul>
                                    <li>
                                        <img src={person4} alt="Steve" />
                                    </li>
                                    <li>Anna Thompson, Boston</li>
                                </ul>
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
