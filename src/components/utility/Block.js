import { Component } from "react";

export default class Block extends Component {
    componentDidMount() {
        document.addEventListener("contextmenu", e => {
            e.preventDefault();
        });
    }
    render() {
        return this.props.children;
    }
}
