import React from 'react';
import { Link } from 'react-router-dom';

const Showcase = ({ img, dir, text, link }) => {
  return dir === 'left' ? (
    <div className='row text-center'>
      <div
        className='col-lg-6 vh-100'
        style={{ background: `url("${img}") no-repeat center center/cover` }}
      />
      <div className='col-lg-6 d-lg-flex align-items-center justify-content-lg-center'>
        <div>
          <p>{text}</p>
          <Link to={link} className='btn btn-outline-secondary'>
            View More
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className='row text-center'>
      <div className='col-lg-6 d-none d-lg-flex align-items-center'>
        <div>
          <p>{text}</p>
          <Link to={link} className='btn btn-outline-secondary'>
            View More
          </Link>
        </div>
      </div>
      <div
        className='col-lg-6 vh-100'
        style={{ background: `url("${img}") no-repeat center center/cover` }}
      />
      <div className='col-lg-6 d-lg-none align-items-center'>
        <div>
          <p>{text}</p>
          <Link to={link} className='btn btn-outline-secondary'>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
