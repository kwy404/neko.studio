import './App.css';
import axios from 'axios';
import {useState} from 'react';
import bCrypt from 'json-encrypt';
import Home from './pages/home';
import './Netflix.css';


import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
