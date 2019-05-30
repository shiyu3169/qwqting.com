import React, { Component } from 'react';
import 'popper.js';
import 'bootstrap';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    jewelries: [
      { text: 'Gallery', to: 'gallery' },
      { text: 'Rendering', to: 'rendering' },
      { text: 'Look Book', to: 'lookBook' }
    ]
  };

  render() {
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
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='/jewelry'
                id='navbarDropdownMenuLink'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Jewelry
              </Link>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link className='dropdown-item' to='/gallery'>
                  Gallery
                </Link>
                <Link className='dropdown-item' to='/rendering'>
                  Rendering
                </Link>
                <Link className='dropdown-item' to='/lookBook'>
                  Look
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/illustration'>
                Illustration
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/About'>
                About
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
  }
}
