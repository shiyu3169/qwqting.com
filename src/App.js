import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Style
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "./css/App.css";
// Main
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
// Jewelry
import Jewelry from "./components/jewelry/Jewelry";
import Gallery from "./components/jewelry/gallery/Gallery";
import Rendering from "./components/jewelry/Rendering";
import LookBook from "./components/jewelry/LookBook";
// Illustration
import Illustration from "./components/illustration/Illustration";
import Footer from "./components/utility/Footer";
import SubFooter from "./components/utility/SubFooter";
import ScrollToTop from "./components/utility/ScrollToTop";
import Illusion from "./components/jewelry/gallery/Illusion";

function App() {
    return (
        <Router>
            <ScrollToTop>
                {/* Main */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/work" component={Work} />

                {/* Jewelry */}
                <Route exact path="/jewelry" component={Jewelry} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/illusion" component={Illusion} />
                <Route exact path="/lookBook" component={LookBook} />
                <Route exact path="/rendering" component={Rendering} />
                {/* Illustration */}
                <Route exact path="/illustration" component={Illustration} />
                <SubFooter />
                <Footer />
            </ScrollToTop>
        </Router>
    );
}

export default App;
