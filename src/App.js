import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/work" component={Work} />
            </div>
        </Router>
    );
}

export default App;
