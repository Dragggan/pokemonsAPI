import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBBtn } from 'mdbreact';
import ModalPage from './modal';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './pokemonDetails.css';

function PokemonDetails({ allPokemonData, match }) {

    const [pokemonDetails, setPokemonDetails] = useState([]);
    console.log(pokemonDetails);

    const getPokemonDetailsData = () => {
        let singlePokemon = [];

        // Using local storage to hold the date after refres
        if (allPokemonData.length > 0) {
            singlePokemon = allPokemonData.filter(m => m.name === match.params.name);
            localStorage.setItem('myData', JSON.stringify(singlePokemon));
        }
        else {
            singlePokemon = JSON.parse(localStorage.getItem('myData'));
        }
        setPokemonDetails(singlePokemon);
    };


    useEffect(() => {
        if (allPokemonData && match.params) {
            getPokemonDetailsData();
        }
    }, [match.params.name]);




    return (
        <div className="pokemon_details_container">
            <figure className="figure" className="figure">
                <figcaption className="figure-caption">
                    <h2>{match.params.name}</h2>
                    {pokemonDetails.map(m => {
                        return (
                            <div>
                                <img src={`${pokemonDetails[0].sprites.other.dream_world.front_default}`} />
                                <h4>type: {m.types[0].type.name}</h4>
                                <ModalPage allPokemonData={allPokemonData} pokemonDetails={pokemonDetails} />
                            </div>
                        );
                    })}
                </figcaption>
            </figure>

        </div>
    );



}

export default PokemonDetails;

