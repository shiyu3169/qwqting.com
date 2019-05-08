import React from "react";
import { Link } from "react-router-dom";

export default function Item({ src, title, to }) {
    return to ? (
        <div className="item">
            <Link to={to}>
                <div className="item-image">
                    <img src={src} alt={title} />
                </div>
                <div className="item-text">
                    <div className="item-text-wrap">
                        <h2 className="item-text-title">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    ) : (
        <div className="item">
            <div className="item-image">
                <img src={src} alt={title} />
            </div>
        </div>
    );
}
