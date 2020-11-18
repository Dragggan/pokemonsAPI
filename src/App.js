
import React, { useEffect, useState } from 'react';
import { getPokemnos } from './API/api';
import Main from './components/main.jsx';
import PokemonDetails from './components/PokemonDetails.jsx';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {

  const [allPokemonData, setallPokemonData] = useState([]);

  const getallPokemonData = async () => {
    const allPokemonData = await getPokemnos();
    setallPokemonData(allPokemonData);
  };




  useEffect(() => {
    getallPokemonData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main allPokemonData={allPokemonData} />
          </Route>
          <Route path='/pokemondetails/:name' render={(props) => (
            <PokemonDetails {...props}  routerProps={props} allPokemonData={allPokemonData}/>
          )} />
        </Switch>

      </Router>
    </div>
  );


}

export default App;
