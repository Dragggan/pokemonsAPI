import React, { useEffect, useState } from 'react';
import { Pagination } from 'semantic-ui-react'

function PokemonDetails({ allPokemonData, match }) {

    const [pokemonDetails, setPokemonDetails] = useState([]);

    const PaginationExamplePagination = () => (
        <Pagination defaultActivePage={5} totalPages={10} />
      )
      
      

    // useEffect(async () => {
    //     if (allPokemonData && match.params) {
    //         let singlePokemon = allPokemonData.filter(m => m.name === match.params.name);
    //         const result = await getPokemonDetails(singlePokemon[0].url);
    //         setPokemonDetails(result);
    //     }
    // }, [match.params.name]);
    return (
        <div className="pokemon_details_container">
       dghgfdhgfhgf
        </div>
    );



}

export default PokemonDetails;

