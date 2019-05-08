import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact-a" className="text-center">
                    <div className="container">
                        <h2 className="section-title">Contact Me</h2>
                        <div className="bottom-line" />
                        <form
                            method="POST"
                            data-netlify="true"
                            data-netlify-recaptcha="true"
                        >
                            <div className="text-fields">
                                <input
                                    type="text"
                                    className="text-input name-input"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="text-input subject-input"
                                    placeholder="Suject"
                                    name="subject"
                                />
                                <input
                                    type="email"
                                    className="text-input email-input"
                                    placeholder="Email Address"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="text-input phone-input"
                                    placeholder="Phone Number"
                                    name="phone"
                                />
                                <textarea
                                    className="text-input message-input"
                                    placeholder="Enter Message"
                                    name="message"
                                />
                                <div>
                                    <div data-netlify-recaptcha="true" />
                                </div>
                            </div>
                            <button type="submit" className="btn-dark mb-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}
