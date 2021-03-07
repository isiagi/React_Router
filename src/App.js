import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Item from "./components/pages/Item";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/about/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
