import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-dark mt-5'>
      <div className='container d-lg-flex justify-content-between pt-3'>
        <div>
          <h2>Jewelry</h2>
          <ul>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link to='/lookBook'>Look Book</Link>
            </li>
            <li>
              <Link to='/rendering'>Rendering</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Illustration</h2>
          <ul>
            <li>
              <Link to='/illustration'>View All</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className='row'>
            <div className='col-lg-6'>
              <i className='fab fa-behance-square fa-3x' />
            </div>
            <div className='col-lg-6'>
              <i className='fab fa-facebook fa-3x' />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <i className='fab fa-instagram fa-3x' />
            </div>
            <div className='col-lg-6'>
              <i className='fab fa-linkedin fa-3x' />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <small>Copyright &copy; 2019, All Rights Reserved</small>
      </div>
    </div>
  );
}

export default Footer;
