import React from "react";

export default function ItemSlides({ imgs, i }) {
    return (
        <div className="slider">
            <div
                id={`Indicators-${i}`}
                className="carousel slide carousel-fade"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    {imgs.map((img, i) =>
                        i === 0 ? (
                            <div className="carousel-item active item" key={i}>
                                <img
                                    className="d-block"
                                    height="250px"
                                    src={img}
                                    alt=""
                                />
                            </div>
                        ) : (
                            <div className="carousel-item item" key={i}>
                                <img
                                    className="d-block"
                                    height="250px"
                                    src={img}
                                    alt=""
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
