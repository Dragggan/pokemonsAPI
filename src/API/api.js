import axios from 'axios';


export const handleError = (err) => {
    console.log(err);
};

export const  getPokemnos = async () => {
    let allPokemons = [];
   await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response => {
            console.log(response)
            allPokemons = response.data.results
        })
        .catch(err => handleError(err));
        return allPokemons;
};
