import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class About extends Component {
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
                                    <Link to="/about" className="current">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/work">Work</Link>
                                </li>
                                <li>
                                    <Link to="contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
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
                                src="img/about.jpg"
                                alt="Qiuting"
                                className="bio-image"
                            />
                            <div className="bio bg-light">
                                <h4>Your Project Is In Safe Hands</h4>
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
                            <img src="img/about-logos/logo-envato.png" alt="" />
                            <img
                                src="img/about-logos/logo-wordpress.png"
                                alt=""
                            />
                            <img
                                src="img/about-logos/logo-woocommerce.png"
                                alt=""
                            />
                            <img
                                src="img/about-logos/logo-magento.png"
                                alt=""
                            />
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
                                        <img
                                            src="img/testimonials/person1.jpg"
                                            alt="Sam"
                                        />
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
                                        <img
                                            src="img/testimonials/person2.jpg"
                                            alt="Sara"
                                        />
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
                                        <img
                                            src="img/testimonials/person3.jpg"
                                            alt="Jill"
                                        />
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
                                        <img
                                            src="img/testimonials/person4.jpg"
                                            alt="Steve"
                                        />
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
