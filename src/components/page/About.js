import React from "react";
import Navbar from "../layout/Navbar";
import about from "../../img/about.jpg";
import Contact from "../about/Contact";

const About = () => {
  return (
    <>
      <Navbar active="about" />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-4">
            <img className="w-100" src={about} alt="Qiuting" />
          </div>
          <div className="col-lg-8 d-lg-flex align-items-center">
            <p>
              Originally from Chengdu, China, I majored in jewelry with a
              Bachelor of Fine Arts at the Savannah College of Art and Design. I
              have been learning drawing and painting since childhood. With the
              inspiration from painting and nature, my jewelry design expresses
              a sense of Chinese style through contemporary design. The beauty
              of nature is eternal. No matter whether the human body or
              botanical specimens, the natural form and curvature of line always
              bring great interest and a sense of beauty. This path has allowed
              me to create jewelry as a three-dimensional painting and share my
              view of timeless beauty with people who love jewelry as art.​
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default About;
