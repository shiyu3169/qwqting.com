import React from 'react';
import Navbar from '../utility/Navbar';
import digital from '../../img/jewelry/rendering/digital.jpg';
import traditional from '../../img/jewelry/rendering/traditional.jpg';

const Rendering = () => {
  return (
    <>
      <Navbar active='jewelry' />
      <div className='container text-center my-5 py-5'>
        <h2 className='section-title'>Rendering</h2>
        <div className='row my-5'>
          <div className='col-lg-6'>
            <div className='container'>
              <img src={digital} alt='Digital' className='w-100' />
              <p>Digital</p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='container'>
              <img src={traditional} alt='Traditional' className='w-100' />
              <p>Traditional</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rendering;
