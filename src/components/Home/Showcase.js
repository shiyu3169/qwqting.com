import React from 'react';
const Showcase = ({ img, dir, text, color }) => {
  return dir === 'left' ? (
    <div className='row text-center'>
      <div
        className='col-lg-6 vh-100'
        style={{ background: `url("${img}") no-repeat center center/cover` }}
      />
      <div className='col-lg-6 d-lg-flex align-items-center'>
        <div>
          <p>{text}</p>
          <button className='btn btn-outline-secondary'>View More</button>
        </div>
      </div>
    </div>
  ) : (
    <div className='row text-center'>
      <div className='col-lg-6 d-none d-lg-flex align-items-center'>
        <div>
          <p>{text}</p>
          <button className='btn btn-outline-secondary'>View More</button>
        </div>
      </div>
      <div
        className='col-lg-6 vh-100'
        style={{ background: `url("${img}") no-repeat center center/cover` }}
      />
      <div className='col-lg-6 d-lg-none align-items-center'>
        <div>
          <p>{text}</p>
          <button className='btn btn-outline-secondary'>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
