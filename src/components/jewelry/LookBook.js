import React, { Component } from 'react';
import Navbar from '../utility/Navbar';

import flowerRain from '../../img/jewelry/lookBook/flowerRain.jpg';
import illusion from '../../img/jewelry/lookBook/illusion.jpg';
import silence from '../../img/jewelry/lookBook/silence.jpg';

export default class LookBook extends Component {
  render() {
    return (
      <>
        <Navbar active='jewelry' />
        <div className='container text-center my-5 py-5'>
          <h2 className='section-title'>Look Book</h2>
          <div className='row my-5'>
            <div className='col-lg-4'>
              <div className='container'>
                <img src={flowerRain} alt='Flower Rain' className='w-100' />
                <p>Flower Rain</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='container'>
                <img src={silence} alt='Silence' className='w-100' />
                <p>Silence</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='container'>
                <img src={illusion} alt='Illusion' className='w-100' />
                <p>Illusion</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
