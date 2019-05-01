import React, { Component } from "react";

export default class BackToTop extends Component {
    state = {
        y: 0,
        visible: false
    };

    componentDidMount() {
        window.addEventListener("scroll", () => {
            this.setState({
                y: window.pageYOffset
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.y !== prevState.y) {
            if (this.state.y > prevState.y) {
                this.setState({
                    visible: true
                });
            } else {
                this.setState({
                    visible: false
                });
            }
        }
    }

    scroll = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            this.state.visible && (
                <button
                    id="backToTop"
                    onClick={this.scroll}
                    className="btn-dark"
                >
                    <i className="fas fa-level-up-alt" />
                </button>
            )
        );
    }
}
