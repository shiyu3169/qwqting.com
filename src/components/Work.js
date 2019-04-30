import React, { Component, Fragment } from "react";
import Navbar from "./utility/Navbar";
import jewelry from "../img/jewelry/jewelry.jpg";
import illustration from "../img/illustration/illustration.jpg";
import { Link } from "react-router-dom";

export default class Work extends Component {
    render() {
        return (
            <Fragment>
                <header id="header-inner">
                    <div className="container">
                        <Navbar current="work" />
                    </div>
                    <section id="work-a">
                        <div className="text-center">
                            <Link to="/jewelry">
                                <img src={jewelry} alt="jewelry" />
                            </Link>

                            <h1>Jewelry</h1>
                        </div>
                        <div className="text-center">
                            <Link to="/illustration">
                                <img src={illustration} alt="illustration" />
                            </Link>

                            <h1>Illustration</h1>
                        </div>
                    </section>
                </header>
            </Fragment>
        );
    }
}
