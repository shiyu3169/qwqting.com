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
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/rendering" component={Rendering} />
                <Route exact path="/lookBook" component={LookBook} />
                <Route exact path="/illustration" component={Illustration} />
                <Route exact path="/jewelry" component={Jewelry} />
            </div>
        </Router>
    );
}

export default App;
