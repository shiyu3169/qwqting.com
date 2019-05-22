import React from 'react';

const HomeSlides = ({ imgs }) => {
  return (
    <div className='slider'>
      <div
        // id="carouselExampleIndicators"
        id={`IndicatorsHome`}
        className='carousel slide'
        data-ride='carousel'
      >
        <ol className='carousel-indicators'>
          {imgs.map((img, l) =>
            l === 0 ? (
              <li
                // data-target="#carouselExampleIndicators"
                data-target={`#IndicatorsHome`}
                data-slide-to='0'
                className='active'
                key={l}
              />
            ) : (
              <li
                // data-target="#carouselExampleIndicators"
                data-target={`#IndicatorsHome`}
                key={l}
                data-slide-to='1'
              />
            )
          )}
        </ol>
        <div className='carousel-inner'>
          {imgs.map((img, i) =>
            i === 0 ? (
              <div className='carousel-item active' key={i}>
                {' '}
                <img className='d-block w-100' src={img} alt='' />{' '}
              </div>
            ) : (
              <div className='carousel-item' key={i}>
                {' '}
                <img className='d-block w-100' src={img} alt='' />{' '}
              </div>
            )
          )}
        </div>
        <a
          className='carousel-control-prev'
          // href="#carouselExampleIndicators"
          href={`#IndicatorsHome`}
          role='button'
          data-slide='prev'
        >
          <i className='fas fa-chevron-left fa-2x' />
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          // href="#carouselExampleIndicators".
          href={`#IndicatorsHome`}
          role='button'
          data-slide='next'
        >
          <i className='fas fa-chevron-right fa-2x' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
};

export default HomeSlides;
