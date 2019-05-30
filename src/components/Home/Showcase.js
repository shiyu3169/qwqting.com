import React from 'react';
const Showcase = ({ img, dir, text }) => {
  return dir === 'left' ? (
    <div className='row'>
      <div
        className='col-lg-6 vh-100'
        style={{ background: `url("${img}") no-repeat center center/cover` }}
      />
      <div className='col-lg-6  d-lg-flex align-items-center'>
        <p className='text-center'>{text}</p>
      </div>
    </div>
  ) : (
    <div className='row'>
      <div className='col-lg-6 d-none d-lg-flex align-items-center'>
        <p className='text-center'>{text}</p>
      </div>
      <div
        className='col-lg-6 vh-100'
        style={{ background: `url("${img}") no-repeat center center/cover` }}
      />
      <div className='col-lg-6 d-lg-none align-items-center'>
        <p className='text-center'>{text}</p>
      </div>
    </div>
  );
};

export default Showcase;
