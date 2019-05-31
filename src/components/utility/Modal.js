import React, { useEffect } from 'react';

const Modal = ({ target, imgs }) => {
  useEffect(() => {
    document.querySelector(`.${target} .carousel-item`).classList.add('active');
  });

  return (
    <div
      className={`modal fade ${target}`}
      tabIndex='-1'
      role='dialog'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl'>
        <div className='modal-content'>
          <div
            id={`${target}Controls`}
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner'>
              {imgs.map((img, i) => (
                <div className='carousel-item' key={`${i}`}>
                  <img className='img-fluid' src={img} alt='First slide' />
                </div>
              ))}
            </div>
            <a
              className='carousel-control-prev'
              href={`#${target}Controls`}
              role='button'
              data-slide='prev'
            >
              <i className='fas fa-chevron-left fa-2x' />
            </a>
            <a
              className='carousel-control-next'
              href={`#${target}Controls`}
              role='button'
              data-slide='next'
            >
              <i className='fas fa-chevron-right fa-2x' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
