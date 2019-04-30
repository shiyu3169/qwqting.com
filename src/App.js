import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/gallery/Gallery";
import Rendering from "./components/Rendering";
import LookBook from "./components/LookBook";
import Illustration from "./components/Illustration";

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
            </div>
        </Router>
    );
}

export default App;
