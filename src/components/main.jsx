import React from 'react';
import {  MDBContainer,MDBTypography } from 'mdbreact';
import DatatablePage from './table';
import SpinnerPage from './loader.jsx';
import './main.css';

const Main = ({ allPokemonData }) => {

  return (
    <>
      <MDBTypography tag='h2' className="headline mb-2">All pokemons</MDBTypography>
      <MDBContainer>
        {allPokemonData.length > 10 ? <DatatablePage allPokemonData={allPokemonData} /> : <SpinnerPage />}
      </MDBContainer>
    </>
  );
};

export default Main;
