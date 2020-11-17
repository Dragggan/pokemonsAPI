
import React, { useEffect, useState } from 'react';
import { getPokemnos } from './API/api';
import './App.css';





function App() {

  const [allPokemons, setAllPokemons] = useState([]);


  const getAllPokemons = async () => {
    const allPokemons = await getPokemnos();
    setAllPokemons(allPokemons);
  };



  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      asdfdsfdsf
    </div>
  );


}

export default App;
