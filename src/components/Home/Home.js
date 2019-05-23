import React, { Component } from 'react';
import Navbar from '../utility/Navbar';
import Typer from '../utility/Typer';
import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';
import HomeSlides from './HomeSlides';
import logo from '../../img/logo.png';

export default class Home extends Component {
  state = {
    imgs: [slide1, slide2, slide3],
    i: 1
  };

  render() {
    return (
      <div>
        <header id='header-home'>
          <div className='container-fluid'>
            <Navbar current='home' />
            <div className='header-content mt-5'>
              <div>
                <img src={logo} alt='' />
                <div className='text-left'>
                  <p>
                    The{' '}
                    <Typer
                      words={['Jewelry Designer', 'Jeweler', 'Illustrator']}
                    />
                  </p>
                </div>
              </div>
              <div className='home-slides'>
                <HomeSlides imgs={this.state.imgs} />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
