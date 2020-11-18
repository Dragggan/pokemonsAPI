import React from 'react';
import { Link } from "react-router-dom";

function Main({ allPokemonData }) {

    const renderBodyRow = (name, url) => {
        console.log(name, url);
    };


    return (
        <div>
            <table className="ui selectable celled table ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {allPokemonData && allPokemonData.map((m, i) => {
                        return (

                            <tr key={i} onClick={() => { renderBodyRow(m.name, m.url); }}>
                                <td><Link to={`/pokemondetails/${m.name}`}>{m.name}</Link> </td>
                                <td><Link to={`/pokemondetails/${m.name}`}>{m.url}</Link> </td>
                            </tr>


                        );
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default Main;
