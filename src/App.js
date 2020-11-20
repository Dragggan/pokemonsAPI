
import React, { useEffect, useState } from 'react';
import { getPokemnos } from './API/api';
import Main from './components/main.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [allPokemonData, setallPokemonData] = useState([]);


  const fetchData = async () => {
    setallPokemonData(await getPokemnos());
  };


  useEffect(() => {
    fetchData();
  }
    , []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Main allPokemonData={allPokemonData} />
          </Route>
          <Route path='/pokemondetails/:name' render={props => (
            <PokemonDetails {...props} allPokemonData={allPokemonData} />
          )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
