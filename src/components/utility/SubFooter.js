import React, { Component } from "react";

export default class SubFooter extends Component {
    render() {
        return (
            <div id="sub-footer">
                <div className="container">
                    <div>
                        <img src="" alt="logo" />
                    </div>
                    <div>
                        <h2>Jewelry</h2>
                        <ul>
                            <li>Gallery</li>
                            <li>Look Book</li>
                            <li>Rendering</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Illustration</h2>
                        <ul>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
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
