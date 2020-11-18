import React, { useEffect,useState } from 'react';
import { getPokemonDetails } from '../API/api';
import { useParams } from 'react-router-dom';

function PokemonDetails({ allPokemonData, match }) {

const [pokemonDetails, setPokemonDetails] = useState([])

const getPokemonDetailsData = async (singlePokemon)=>{
    setPokemonDetails( await getPokemonDetails(singlePokemon[0].url))
}

    useEffect(() => {
        if (allPokemonData && match.params) {
            let singlePokemon = allPokemonData.filter(m => m.name === match.params.name);
            getPokemonDetailsData(singlePokemon);
        }
    }, [match.params.name]);

    return (
        <div>
            pokemon details
        </div>
    );
}

export default PokemonDetails;

