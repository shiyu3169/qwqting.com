import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Style
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/app.min.css';
// Main
import Home from './views/Home';
import About from './views/About';

import Footer from './components/utility/Footer';
// Jewelry
import Gallery from './views/jewelry/gallery/Gallery';
import Illusion from './views/jewelry/gallery/Illusion';
import NuturingNature from './views/jewelry/gallery/NuturingNature';
import Rendering from './components/jewelry/Rendering';
import LookBook from './components/jewelry/LookBook';
// Illustration
import Illustration from './components/illustration/Illustration';
import ScrollToTop from './components/utility/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        {/* Main */}
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        {/* Jewelry */}
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/illusion' component={Illusion} />
        <Route exact path='/nurturing-nature' component={NuturingNature} />
        <Route exact path='/lookBook' component={LookBook} />
        <Route exact path='/rendering' component={Rendering} />
        {/* Illustration */}
        <Route exact path='/illustration' component={Illustration} />

        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
