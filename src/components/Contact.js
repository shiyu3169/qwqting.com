import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact-a" className="text-center py-3">
                    <div className="container">
                        <h2 className="section-title">Contact Me</h2>
                        <div className="bottom-line" />
                        <p className="lead">Here is how you can reach me</p>
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
                                <div className="my-2">
                                    <div data-netlify-recaptcha="true" />
                                </div>
                            </div>
                            <button type="submit" className="btn-dark">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
                <section id="contact-b" className="py-3 bg-dark">
                    <div className="contaienr">
                        <div className="contact-info">
                            <div>
                                <i className="fas fa-envelope fa-2x" />
                                <h3>Email</h3>
                                <p>qiuqiu0813@gmail.com</p>
                            </div>
                            <div>
                                <i className="fas fa-phone fa-2x" />
                                <h3>Phone</h3>
                                <p>(912)-224-2113</p>
                            </div>
                            <div>
                                <i className="fas fa-address-card fa-2x" />
                                <h3>Address</h3>
                                <p>394 Ocean Ave, Revere, MA</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="contact-c" className="bg-main py-4">
                    <div className="container">
                        <h1>Let's Start Your Next Project</h1>
                    </div>
                </div>
            </div>
        );
    }
}
