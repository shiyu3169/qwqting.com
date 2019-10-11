import React, { useEffect } from 'react';
import 'popper.js';
import 'bootstrap';
import { Link } from 'react-router-dom';

const Navbar = ({ active }) => {
  useEffect(() => {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`#${active}`).classList.add('active');
  });

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
      <span className='navbar-brand'>QWQIUTING</span>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/' id='home'>
              Home
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <Link
              className='nav-link dropdown-toggle'
              to='/jewelry'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              id='jewelry'
            >
              Jewelry
            </Link>
            <div className='dropdown-menu' aria-labelledby='jewelry'>
              <Link className='dropdown-item' to='/gallery' id='gallery'>
                Gallery
              </Link>
              <Link className='dropdown-item' to='/rendering' id='rendering'>
                Rendering
              </Link>
              <Link className='dropdown-item' to='/lookBook' id='look'>
                Look
              </Link>
            </div>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/illustration' id='illustration'>
              Illustration
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/About' id='about'>
              About/Contact
            </Link>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='https://www.etsy.com/shop/QwQiutingWang'
              rel='noopener noreferrer'
              target='_blank'
            >
              Shop
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
