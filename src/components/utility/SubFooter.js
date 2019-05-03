import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
export default class SubFooter extends Component {
    render() {
        return (
            <div id="sub-footer">
                <div className="container">
                    <div>
                        <img id="logo" src={logo} alt="logo" />
                    </div>
                    <div>
                        <h2>Jewelry</h2>
                        <ul>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/lookBook">Look Book</Link>
                            </li>
                            <li>
                                <Link to="/rendering">Rendering</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Illustration</h2>
                        <ul>
                            <li>
                                <Link to="/illustration">View All</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="social">
                        <i className="fab fa-twitter" />
                        <i className="fab fa-facebook" />
                        <i className="fab fa-instagram" />
                        <i className="fab fa-linkedin" />
                    </div>
                </div>
            </div>
        );
    }
}
