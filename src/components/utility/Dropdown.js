import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Dropdown extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.text}>
                        <Link to={item.to}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}
