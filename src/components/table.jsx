import React, { useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import './table.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const DatatablePage = ({ allPokemonData }) => {


    const [showAllData, setAllData] = useState(false);

    const togleAllData = ()  => {
        setAllData(!showAllData);
    };

    const tableData = () => {
        let rows  = [] ;
        allPokemonData.map(m => {
            rows.push({
                name: <Link to={`/pokemondetails/${m.name}`}>{m.name}</Link>,
                first_ability: m.abilities[0] ? m.abilities[0].ability.name : "no abitlity",
                second_ability: m.abilities[1] ? m.abilities[1].ability.name : "no abitlity",
                third_ability: m.abilities[2] ? m.abilities[2].ability.name : "no abitlity",
                image: <img src={m.sprites.back_default} className="pok_image" alt=""/>
            });
            return null
        });

        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: 50
                },
                {
                    label: 'Ability 1',
                    field: 'first_ability',
                    sort: 'asc',
                    width: 170
                },
                {
                    label: 'Ability 2',
                    field: 'second_ability',
                    sort: 'asc',
                    width: 170
                },
                {
                    label: 'Ability 3',
                    field: 'third_ability',
                    sort: 'asc',
                    width: 170
                },
                {
                    label: 'Image',
                    field: 'image',
                    sort: 'asc',
                    width: 170
                },

            ],
            rows
        };
        return data;
    };

    const BasicTable = () => {
        return (
            <MDBTable
            className="mt-4"
            striped
                bordered>
                <MDBTableHead>
                    <tr>
                        <th>Name</th>
                        <th>Ability 1</th>
                        <th>Ability 2</th>
                        <th>Ability 3</th>
                        <th>Image</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {allPokemonData.map((m,i) => {
                        return (
                            <tr key={i}>
                                <td><Link to={`/pokemondetails/${m.name}`}><h4 className="headline_pok_name">{m.name}</h4></Link></td>
                                <td>{m.abilities[0] ? m.abilities[0].ability.name : "no abitlity"}</td>
                                <td>{m.abilities[1] ? m.abilities[1].ability.name : "no abitlity"}</td>
                                <td>{m.abilities[2] ? m.abilities[2].ability.name : "no abitlity"}</td>
                                <td><img src={m.sprites.back_default} className="pok_image" alt=""/></td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
            </MDBTable>
        );
    };

    return (
        <>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onChange={togleAllData} />
                <label className="custom-control-label" htmlFor="defaultUnchecked">Show all pokemons</label>
            </div>

            { !showAllData && <MDBDataTable
                striped
                bordered
                data={tableData()} />}
            { showAllData && BasicTable()}
        </>
    );
};


export default DatatablePage;