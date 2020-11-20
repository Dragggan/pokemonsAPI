import React, { useEffect, useState } from 'react';
import ModalPage from './modal';
import './pokemonDetails.css';

function PokemonDetails({ allPokemonData, match }) {

    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);

    const getPokemonDetailsData = () => {
        let singlePokemon = [];
        let allPokemons=[]

        // Using local storage to hold the date after refresh
        if (allPokemonData.length > 0) {
            singlePokemon = allPokemonData.filter(m => m.name === match.params.name);
            setAllPokemons(allPokemonData)
            setPokemonDetails(singlePokemon);
            localStorage.setItem('signlePokemon', JSON.stringify(singlePokemon));
            localStorage.setItem('allPokemons', JSON.stringify(allPokemonData));
        }
        else {
            singlePokemon = JSON.parse(localStorage.getItem('signlePokemon'));
            allPokemons = JSON.parse(localStorage.getItem('allPokemons'));
            setAllPokemons(allPokemons);
            setPokemonDetails(singlePokemon);
        }
    };


    useEffect(() => {
        if (allPokemonData && match.params) {
            getPokemonDetailsData();
        }
    }, [match.params.name]);

    return (
        <div className="pokemon_details_container">
            <figure className="figure">
                <figcaption className="figure-caption">
                    <h2>{match.params.name}</h2>
                    {pokemonDetails.map( (m,i) => {
                        return (
                            <div key={i}>
                                <img src={`${pokemonDetails[0].sprites.other.dream_world.front_default}`}  alt=''/>
                                <h4>type: {m.types[0].type.name}</h4>
                                <ModalPage
                                allPokemonData={allPokemons} 
                                pokemonDetails={pokemonDetails} />
                            </div>
                        );
                    })}
                </figcaption>
            </figure>
        </div>
    );
}

export default PokemonDetails;

