import React, { Component } from "react";
import "../../../node_modules/bootstrap/js/dist/modal";
import Slider from "./Slider";

export default class Slides extends Component {
    render() {
        return (
            <div>
                <img
                    className="slide"
                    src={this.props.src}
                    alt=""
                    data-toggle="modal"
                    data-target={`#modal${this.props.i}`}
                />

                <div
                    className="modal fade"
                    id={`modal${this.props.i}`}
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-lg modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLongTitle"
                                >
                                    {this.props.title}
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Slider
                                    imgs={this.props.imgs}
                                    i={this.props.i}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
