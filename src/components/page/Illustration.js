import React from "react";
import Navbar from "../layout/Navbar";

import i1 from "../../img/illustration/i1.jpg";
import i2 from "../../img/illustration/i2.jpg";
import i3 from "../../img/illustration/i3.jpg";
import i4 from "../../img/illustration/i4.jpg";
import i5 from "../../img/illustration/i5.jpg";
import i6 from "../../img/illustration/i6.jpg";
import i7 from "../../img/illustration/i7.jpg";
import i8 from "../../img/illustration/i8.jpg";
import i9 from "../../img/illustration/i9.jpg";

const Illustration = () => {
  return (
    <>
      <Navbar active="illustration" />
      <div className="container text-center my-5 py-5">
        <h2 className="section-title">Illustration</h2>
        <div className="row mt-5 pt-5">
          <div className="col-lg-4">
            <div className="container">
              <img className="w-100" src={i1} alt="i1" />
            </div>
          </div>
          <div className="col-lg-4">
            <img className="w-100" src={i2} alt="i2" />
          </div>
          <div className="col-lg-4">
            <img className="w-100" src={i3} alt="i3" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <img className="w-100" src={i4} alt="i1" />
            </div>
          </div>
          <div className="col-lg-4">
            <img className="w-100" src={i5} alt="i2" />
          </div>
          <div className="col-lg-4">
            <img className="w-100" src={i6} alt="i3" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <img className="w-100" src={i7} alt="i1" />
            </div>
          </div>
          <div className="col-lg-4">
            <img className="w-100" src={i8} alt="i2" />
          </div>
          <div className="col-lg-4">
            <img className="w-100" src={i9} alt="i3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Illustration;
