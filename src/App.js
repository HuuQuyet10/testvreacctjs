import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../src/Component/FolderRouter/About.js';
import Home from '../src/Component/FolderRouter/Home.js';
import Dashboard from '../src/Component/FolderRouter/Dashboard.js';
import Testcallapi from '../src/Component/FolderRouter/Testcallapi.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Testcallapi">Testcallapi</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/Testcallapi">
            <Testcallapi />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
