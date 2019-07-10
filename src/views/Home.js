import React from 'react';
import Navbar from '../components/utility/Navbar';
import Showcase from '../components/Home/Showcase';
import img1 from '../img/jewelry/gallery/illusion/5/2.jpg';
import img2 from '../img/jewelry/gallery/nurturingNature/1/1.jpg';
import img3 from '../img/illustration/i8.jpg';
const Home = () => {
  return (
    <>
      <Navbar active='home' />
      <div className='container-fluid'>
        <Showcase
          img={img1}
          dir='left'
          color='pink'
          link='/illusion'
          text='This collection is derived from Nuturing Nature which is inspired by city gardening. With organic form breaking through the geometric structure, the work alludes to new growth extending from the body. The fabric acts as a casing but allows the viewer to see the seeds inside. From the outside there is order, but the interior shows difference in the same way personalities shine in an orderly city. Imitating natural patterns to create jewelry is my own way to nurture the nature.'
        />
        <Showcase
          img={img2}
          dir='right'
          link='/nurturing-nature'
          text='Nurturing Nature is inspired by city gardening. With organic form breaking through or within the geometric from, the new growing leaves of pruned trees implied how people keep their personalities when following the city rule. When I imitate natural pattern and make it into jewelry pieces, it is also my own way to nurture the nature. People wonder at the texture or material in my designs. It is the rebirth of natural elements, which leads people to carefully gaze, question and think. Deconstructing natural patterns, I take the original form and turn it into a basic element; the pattern of a mushroom becomes part of my language.'
        />
        <Showcase
          img={img3}
          dir='left'
          text='Coming Soon'
          link='/illustration'
        />
      </div>
    </>
  );
};

export default Home;
