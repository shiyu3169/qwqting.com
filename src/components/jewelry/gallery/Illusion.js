import React from 'react';
import Navbar from '../../utility/Navbar';
import i11 from '../../../img/jewelry/gallery/illusion/1/1.webp';
import i12 from '../../../img/jewelry/gallery/illusion/1/2.webp';
import i13 from '../../../img/jewelry/gallery/illusion/1/3.webp';
import i21 from '../../../img/jewelry/gallery/illusion/2/2-1.webp';
import i22 from '../../../img/jewelry/gallery/illusion/2/2-2.webp';
import i23 from '../../../img/jewelry/gallery/illusion/2/2-3.webp';
import i31 from '../../../img/jewelry/gallery/illusion/3/3-1.jpg';
import i32 from '../../../img/jewelry/gallery/illusion/3/3-2.jpg';
import i41 from '../../../img/jewelry/gallery/illusion/4/4-1.webp';
import i42 from '../../../img/jewelry/gallery/illusion/4/4-2.webp';
import i51 from '../../../img/jewelry/gallery/illusion/5/1.jpg';
import i52 from '../../../img/jewelry/gallery/illusion/5/2.jpg';
import i61 from '../../../img/jewelry/gallery/illusion/6/1.jpg';
import i62 from '../../../img/jewelry/gallery/illusion/6/2.jpg';
import i63 from '../../../img/jewelry/gallery/illusion/6/3.jpg';
import i64 from '../../../img/jewelry/gallery/illusion/6/4.jpg';
import i71 from '../../../img/jewelry/gallery/illusion/7/1.jpg';
import i72 from '../../../img/jewelry/gallery/illusion/7/2.jpg';
import i73 from '../../../img/jewelry/gallery/illusion/7/3.jpg';
import i81 from '../../../img/jewelry/gallery/illusion/8/1.webp';
import i82 from '../../../img/jewelry/gallery/illusion/8/2.jpg';

const Illusion = () => {
  return (
    <>
      <Navbar active='jewelry' />
      <div className='container mt-5 pt-5 text-center'>
        <h2 className='section-title'>Illusion</h2>
        <div className='row'>
          <div className='col-lg-3'>
            <img
              className='w-100'
              data-toggle='modal'
              data-target='.i1'
              src={i11}
              alt=''
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i21}
              className='w-100'
              data-toggle='modal'
              data-target='.i2'
              alt=''
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i31}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i3'
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i41}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i4'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <img
              className='w-100'
              src={i51}
              alt=''
              data-toggle='modal'
              data-target='.i5'
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i61}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i6'
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i71}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i7'
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i81}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i8'
            />
          </div>
        </div>
        <p className='mt-5'>
          This collection is derived from Nuturing Nature which is inspired by
          city gardening. With organic form breaking through the geometric
          structure, the work alludes to new growth extending from the body. The
          fabric acts as a casing but allows the viewer to see the seeds inside.
          From the outside there is order, but the interior shows difference in
          the same way personalities shine in an orderly city. Imitating natural
          patterns to create jewelry is my own way to nurture the nature.
        </p>
      </div>
    </>
  );
};

export default Illusion;
