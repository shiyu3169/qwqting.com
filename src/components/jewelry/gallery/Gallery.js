import React, { Component } from 'react';
import Navbar from '../../utility/Navbar';
import { Link } from 'react-router-dom';
import illusion1 from '../../../img/jewelry/gallery/illusion/illusion1.jpg';
import nn1 from '../../../img/jewelry/gallery/nurturingNature/nn1.jpg';
import one1 from '../../../img/jewelry/gallery/oneOfAKind/one1.jpg';

export default class Gallery extends Component {
  render() {
    return (
      <>
        <Navbar active='jewelry' />
        <div className='container text-center my-5 py-5'>
          <h2 className='section-title'>Gallery</h2>
          <div className='row mt-5 pt-5'>
            <div className='col-lg-4'>
              <div className='container'>
                <Link to='/illusion'>
                  <img className='w-100' src={illusion1} alt='illusion' />
                  <p>Illusion</p>
                </Link>
              </div>
            </div>
            <div className='col-lg-4'>
              <Link to='/nurturing-nature'>
                <img className='w-100' src={nn1} alt='Nurturing Nature' />
                <p>Nurturing Nature</p>
              </Link>
            </div>
            <div className='col-lg-4'>
              <img className='w-100' src={one1} alt='One Of A Kind' />
              <p>One of a Kind</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
