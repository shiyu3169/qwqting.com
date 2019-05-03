import React from "react";
import { Link } from "react-router-dom";

export default function Item({ src, title, to }) {
    return (
        <div className="item">
            <div className="item-image">
                <Link to={to}>
                    <img src={src} alt={title} />
                </Link>
            </div>
            <div className="item-text">
                <div className="item-text-wrap">
                    <h2 className="item-text-title">{title}</h2>
                </div>
            </div>
        </div>
    );
}
