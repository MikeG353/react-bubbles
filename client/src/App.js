import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Bubbles from './components/Bubbles'
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/friends" component={ Bubbles } />
      </div>
    </Router>
  );
}

export default App;
