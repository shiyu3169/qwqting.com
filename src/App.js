import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Style
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/app.min.css";
// Components
import Home from "./components/page/Home";
import About from "./components/page/About";
import Footer from "./components/layout/Footer";
import Gallery from "./components/page/Gallery";
import Illusion from "./components/page/Illusion";
import NuturingNature from "./components/page/NuturingNature";
import Rendering from "./components/page/Rendering";
import LookBook from "./components/page/LookBook";
import Illustration from "./components/page/Illustration";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop>
        {/* Main */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* Jewelry */}
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/illusion" component={Illusion} />
        <Route exact path="/nurturing-nature" component={NuturingNature} />
        <Route exact path="/lookBook" component={LookBook} />
        <Route exact path="/rendering" component={Rendering} />
        {/* Illustration */}
        <Route exact path="/illustration" component={Illustration} />

        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
