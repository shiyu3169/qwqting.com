import React, { Component } from 'react';
import Navbar from '../utility/Navbar';
import Typer from '../utility/Typer';
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';
import HomeSlides from './HomeSlides';

export default class Home extends Component {
  state = {
    imgs: [slide1, slide2, slide3],
    i: 1
  };

  render() {
    return (
      <div>
        <header id='header-home'>
          <div>
            <Navbar current='home' />
            <div className='header-content mt-5'>
              <div className='container'>
                <h1>
                  Qiuting Wang
                  <br />
                  The{' '}
                  <Typer
                    words={['Jewelry Designer', 'Jeweler', 'Illustrator']}
                  />
                </h1>
              </div>
              <div className='container'>
                <HomeSlides imgs={this.state.imgs} />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
