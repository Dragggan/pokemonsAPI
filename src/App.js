
import React, { useEffect, useState } from 'react';
import { getPokemnos } from './API/api';
import Main from './components/main.jsx'
import 'semantic-ui-css/semantic.min.css'
import './App.css';





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
      <Main allPokemonData={allPokemonData}/>
    </div>
  );


}

export default App;
