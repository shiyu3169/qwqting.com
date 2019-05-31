import React from 'react';

const Contact = () => {
  return (
    <div className='container text-center'>
      <h2 className='section-title mb-4'>Contact Me</h2>
      <form name='qwqiuting' action='POST' data-netlify='true'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Subject'
                name='subject'
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Email Address'
                name='email'
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Phone Number'
                name='phone'
              />
            </div>
          </div>
        </div>
        <div className='form-group'>
          <textarea
            className='form-control'
            placeholder='Enter Message'
            name='message'
            rows='5'
          />
        </div>
        <button type='submit' className='btn btn-outline-dark'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
