import React from 'react';
import Navbar from '../../utility/Navbar';
import Modal from '../../utility/Modal';
import i11 from '../../../img/jewelry/gallery/nurturingNature/1/1.jpg';
import i12 from '../../../img/jewelry/gallery/nurturingNature/1/2.jpg';
import i13 from '../../../img/jewelry/gallery/nurturingNature/1/3.jpg';
import i14 from '../../../img/jewelry/gallery/nurturingNature/1/4.jpg';
import i21 from '../../../img/jewelry/gallery/nurturingNature/2/1.jpg';
import i22 from '../../../img/jewelry/gallery/nurturingNature/2/2.jpg';
import i31 from '../../../img/jewelry/gallery/nurturingNature/3/1.jpg';
import i32 from '../../../img/jewelry/gallery/nurturingNature/3/2.jpg';
import i41 from '../../../img/jewelry/gallery/nurturingNature/4/1.jpg';
import i42 from '../../../img/jewelry/gallery/nurturingNature/4/2.jpg';
import i51 from '../../../img/jewelry/gallery/nurturingNature/5/1.jpg';
import i52 from '../../../img/jewelry/gallery/nurturingNature/5/2.jpg';
import i53 from '../../../img/jewelry/gallery/nurturingNature/5/3.jpg';
import i61 from '../../../img/jewelry/gallery/nurturingNature/6/1.webp';
import i62 from '../../../img/jewelry/gallery/nurturingNature/6/2.webp';
import i63 from '../../../img/jewelry/gallery/nurturingNature/6/3.webp';
import i71 from '../../../img/jewelry/gallery/nurturingNature/7/1.jpg';
import i72 from '../../../img/jewelry/gallery/nurturingNature/7/2.jpg';
import i81 from '../../../img/jewelry/gallery/nurturingNature/8/1.jpg';
import i82 from '../../../img/jewelry/gallery/nurturingNature/8/2.jpg';
import i83 from '../../../img/jewelry/gallery/nurturingNature/8/3.jpg';
import i84 from '../../../img/jewelry/gallery/nurturingNature/8/4.jpg';
import i91 from '../../../img/jewelry/gallery/nurturingNature/9/1.jpg';
import i92 from '../../../img/jewelry/gallery/nurturingNature/9/2.jpg';
import i93 from '../../../img/jewelry/gallery/nurturingNature/9/3.jpg';
import i101 from '../../../img/jewelry/gallery/nurturingNature/10/1.webp';
import i102 from '../../../img/jewelry/gallery/nurturingNature/10/2.webp';
import i103 from '../../../img/jewelry/gallery/nurturingNature/10/3.webp';
import i104 from '../../../img/jewelry/gallery/nurturingNature/10/4.webp';
import i111 from '../../../img/jewelry/gallery/nurturingNature/11/1.jpg';
import i121 from '../../../img/jewelry/gallery/nurturingNature/12/1.jpg';

const NuturingNature = () => {
  return (
    <>
      <Navbar active='jewelry' />
      <div className='container mt-5 pt-5'>
        <h2 className='section-title text-center'>Nurturing Nature</h2>
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
              src={i63}
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
          <div className='col-lg-3'>
            <img
              src={i91}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i9'
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i101}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i10'
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i111}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i11'
            />
          </div>
          <div className='col-lg-3'>
            <img
              src={i121}
              className='w-100'
              alt=''
              data-toggle='modal'
              data-target='.i12'
            />
          </div>
          <Modal target='i1' imgs={[i11, i12, i13, i14]} />
          <Modal target='i2' imgs={[i21, i22]} />
          <Modal target='i3' imgs={[i31, i32]} />
          <Modal target='i4' imgs={[i41, i42]} />
          <Modal target='i5' imgs={[i51, i52, i53]} />
          <Modal target='i6' imgs={[i61, i62, i63]} />
          <Modal target='i7' imgs={[i71, i72]} />
          <Modal target='i8' imgs={[i81, i82, i83, i84]} />
          <Modal target='i9' imgs={[i91, i92, i93]} />
          <Modal target='i10' imgs={[i101, i102, i103, i104]} />
          <Modal target='i11' imgs={[i111]} />
          <Modal target='i12' imgs={[i121]} />
        </div>
        <p className='mt-5'>
          Nurturing Nature is inspired by city gardening. With organic form
          breaking through or within the geometric from, the new growing leaves
          of pruned trees implied how people keep their personalities when
          following the city rule. When I imitate natural pattern and make it
          into jewelry pieces, it is also my own way to nurture the nature.
          People wonder at the texture or material in my designs. It is the
          rebirth of natural elements, which leads people to carefully gaze,
          question and think. Deconstructing natural patterns, I take the
          original form and turn it into a basic element; the pattern of a
          mushroom becomes part of my language.
        </p>
      </div>
    </>
  );
};

export default NuturingNature;
