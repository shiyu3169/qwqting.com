import React from "react";
import { Link } from "react-router-dom";

export default function JewelryCategory({ src, title, to }) {
    return (
        <div className="text-center">
            <Link to={to}>
                <img src={src} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    );
}
