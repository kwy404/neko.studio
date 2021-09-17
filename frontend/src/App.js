import './App.css';
import axios from 'axios';
import {useState} from 'react';
import bCrypt from 'json-encrypt';
import Home from './pages/home';

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
  const [animes, setAnimes] = useState([]);
  const [api, setApi] = useState(false);
  const getAnimes = async () => {
    const anime = await axios.get(`http://localhost:5000/anime`)
    const data = await anime.data
    setAnimes(JSON.parse(bCrypt.decrypt(data)));
    setApi(true)
  }

  if(!api){
    getAnimes();
  }

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
