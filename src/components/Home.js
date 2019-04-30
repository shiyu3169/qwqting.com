import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./utility/Navbar";
import Typer from "./utility/Typer";

export default class Home extends Component {
    render() {
        return (
            <div>
                <header id="header-home">
                    <div className="container">
                        <Navbar current="home" />
                        <div className="header-content">
                            <h1>
                                I Am Qiuting Wang
                                <br />
                                The{" "}
                                <Typer
                                    words={[
                                        "Jewelry Designer",
                                        "Jeweler",
                                        "Illustrator"
                                    ]}
                                />
                            </h1>
                            <p className="lead">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit.
                            </p>
                            <Link to="/work" className="btn-light">
                                View My Work
                            </Link>
                        </div>
                    </div>
                </header>
                <section id="home-a" className="text-center py-2">
                    <div className="container">
                        <h2 className="section-title">I Specialize In</h2>
                        <div className="bottom-line" />
                        <p className="lead">
                            Jewelry design/making as well as illustation and
                            photography
                        </p>
                        <div className="specials">
                            <div>
                                <i className="fas fa-gem fa-2x" />
                                <h3>Jewelry Design</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Fugiat quisquam doloremque
                                    ea ullam vitae autem mollitia repudiandae
                                    nihil, alias cupiditate?
                                </p>
                            </div>

                            <div>
                                <i className="fas fa-ring fa-2x" />
                                <h3>Jewelry Making</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Fugiat quisquam doloremque
                                    ea ullam vitae autem mollitia repudiandae
                                    nihil, alias cupiditate?
                                </p>
                            </div>
                            <div>
                                <i className="fas fa-palette fa-2x" />
                                <h3>Illustration</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Fugiat quisquam doloremque
                                    ea ullam vitae autem mollitia repudiandae
                                    nihil, alias cupiditate?
                                </p>
                            </div>
                            <div>
                                <i className="fab fa-adobe fa-2x" />
                                <h3>Photography</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Fugiat quisquam doloremque
                                    ea ullam vitae autem mollitia repudiandae
                                    nihil, alias cupiditate?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="home-b" className="text-center py-2">
                    <div className="stats">
                        <div>
                            <ul>
                                <li>
                                    <i className="fas fa-users fa-3x" />
                                </li>
                                <li className="stats-title">Followers</li>
                                <li className="stats-number">2000+</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <i className="fas fa-award fa-3x" />
                                </li>
                                <li className="stats-title">Awards</li>
                                <li className="stats-number">3</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <i className="fas fa-hourglass-start fa-3x" />
                                </li>
                                <li className="stats-title">Hours Worked</li>
                                <li className="stats-number">15k+</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <i className="fas fa-users fa-3x" />
                                </li>
                                <li className="stats-title">
                                    Projects Completed
                                </li>
                                <li className="stats-number">100+</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="home-c" className="text-center py-2">
                    <div className="container">
                        <h2 className="section-title">My Creative Process</h2>
                        <div className="bottom-line" />
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Tempore, repudiandae.
                        </p>
                        <div className="process">
                            <div>
                                <i className="fas fa-file-alt fa-4x process-icon my-2">
                                    <div className="process-step">1</div>
                                </i>
                                <h3>Discuss The Project</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Recusandae repudiandae,
                                    omnis odio illo quidem nihil.
                                </p>
                            </div>
                            <div>
                                <i className="fas fa-desktop fa-4x process-icon my-2">
                                    <div className="process-step">2</div>
                                </i>
                                <h3>BrainStorm</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Recusandae repudiandae,
                                    omnis odio illo quidem nihil.
                                </p>
                            </div>
                            <div>
                                <i className="fas fa-object-ungroup fa-4x process-icon my-2">
                                    <div className="process-step">3</div>
                                </i>
                                <h3>Planning</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Recusandae repudiandae,
                                    omnis odio illo quidem nihil.
                                </p>
                            </div>
                            <div>
                                <i className="fas fa-thumbs-up fa-4x process-icon my-2">
                                    <div className="process-step">4</div>
                                </i>
                                <h3>Interaction</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Recusandae repudiandae,
                                    omnis odio illo quidem nihil.
                                </p>
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
