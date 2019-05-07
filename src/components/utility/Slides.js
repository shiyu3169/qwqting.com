import React, { Component } from "react";

export default class Slides extends Component {
    showSlides = () => {
        this.props.showSlides(this.props.imgs);
    };

    render() {
        return (
            <div className="slide" onClick={this.showSlides}>
                <img className="slide-image" src={this.props.src} alt="" />
            </div>
        );
    }
}
