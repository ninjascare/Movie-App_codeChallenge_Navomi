import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MovieList from "./components/MovieList";
import SingleMovie from "./components/SingleMovie";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/movies/:movieId" component={SingleMovie} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
