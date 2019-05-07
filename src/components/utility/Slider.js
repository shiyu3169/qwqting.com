import React, { Component } from "react";

export default class Slider extends Component {
    componentDidMount() {
        document.querySelector(".slide-img").classList.add("current");
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "visible";
    }

    goBack = () => {
        this.props.goBack();
    };

    nextSlide = () => {
        // get current class
        const current = document.querySelector(".current");
        // Remove current class
        current.classList.remove("current");

        // Check for next Slide
        if (current.nextElementSibling) {
            // Add current to next sibling
            current.nextElementSibling.classList.add("current");
        } else {
            // Add current to start
            document.querySelector(".slide-img").classList.add("current");
        }
    };

    prevSlide = () => {
        // get current class
        const current = document.querySelector(".current");
        const images = document.querySelectorAll(".slide-img");
        // Remove current class
        current.classList.remove("current");

        // Check for prev Slide
        if (current.previousElementSibling) {
            // Add current to prev sibling
            current.previousElementSibling.classList.add("current");
        } else {
            // Add current to start
            images[images.length - 1].classList.add("current");
        }
    };

    show = i => {
        // get current class
        const current = document.querySelector(".current");
        const images = document.querySelectorAll(".slide-img");
        // Remove current class
        current.classList.remove("current");

        images[i].classList.add("current");
    };

    render() {
        return (
            <div className="slider">
                <span onClick={this.goBack}>
                    <i className="fas fa-backspace fa-2x" />
                </span>
                <div>
                    {this.props.slides.map((slide, i) => (
                        <img className="slide-img" key={i} src={slide} alt="" />
                    ))}
                </div>
                <div className="buttons">
                    <button id="prev" onClick={this.prevSlide}>
                        <i className="fas fa-arrow-left" />
                    </button>
                    <button id="next" onClick={this.nextSlide}>
                        <i className="fas fa-arrow-right" />
                    </button>
                </div>
                <div className="footer-button">
                    {this.props.slides.map((slide, i) => (
                        <img
                            className="footer-img"
                            key={i}
                            src={slide}
                            alt=""
                            onClick={this.show.bind(this, i)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
