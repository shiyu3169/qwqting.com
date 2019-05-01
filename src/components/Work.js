import React, { Component } from "react";
import jewelry from "../img/jewelry/jewelry.jpg";
import illustration from "../img/illustration/illustration.jpg";
import { Link } from "react-router-dom";

export default class Work extends Component {
    render() {
        return (
            <div id="work">
                <div className="container">
                    <h2 className="section-title">My Work</h2>
                    <div className="bottom-line" />
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
            </div>
        );
    }
}
