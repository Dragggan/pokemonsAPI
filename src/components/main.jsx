import React, { useState } from 'react';
import _ from 'lodash';
import { MDBMedia, MDBContainer } from 'mdbreact';
import { MDBTypography } from 'mdbreact';
import DatatablePage from './table';
import DatatablePageAllData from './tableAllData';
import './main.css';
import SpinnerPage from './loader.jsx';

const Main = ({ allPokemonData }) => {







  return (
    <div>

      <MDBTypography tag='h1' className="headline">All pokemons</MDBTypography>
      <MDBContainer>
        {allPokemonData.length > 10 ? <DatatablePage allPokemonData={allPokemonData} /> : <SpinnerPage />}
      </MDBContainer>
    </div>
  );
};

export default Main;
