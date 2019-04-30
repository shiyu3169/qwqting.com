import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// Jewelry
import Jewelry from "./components/jewelry/Jewelry";
import Gallery from "./components/jewelry/Gallery";
import Rendering from "./components/jewelry/Rendering";
import LookBook from "./components/jewelry/LookBook";
// Illustration
import Illustration from "./components/illustration/Illustration";

function App() {
    return (
        <Router>
            <div>
                {/* Main */}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                {/* Jewelry */}
                <Route exact path="/jewelry" component={Jewelry} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/lookBook" component={LookBook} />
                <Route exact path="/rendering" component={Rendering} />
                {/* Illustration */}
                <Route exact path="/illustration" component={Illustration} />
            </div>
        </Router>
    );
}

export default App;
