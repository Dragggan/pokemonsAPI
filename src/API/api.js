import axios from 'axios';


export const handleError = (err) => {
    console.log(err);
};

export const  getPokemnos = async () => {
    let allPokemons = [];
   await axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(response => {
            console.log(response)
            allPokemons = response.data.results
        })
        .catch(err => handleError(err));
        return allPokemons;
};
