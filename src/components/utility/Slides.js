import React, { Component } from "react";

export default class Slides extends Component {
    render() {
        return (
            <div className="slide">
                <img className="slide-image" src={this.props.src} alt="" />
            </div>
        );
    }
}
