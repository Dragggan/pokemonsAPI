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
                name: <Link to={`/pokemondetails/${m.name}`}><h4 className="headline_pok_name">{m.name}</h4></Link>,
                first_ability: m.abilities[0] && m.abilities[0].ability.name,
                second_ability: m.abilities[1] ? m.abilities[1].ability.name : "no abitlity",
                third_ability: m.abilities[2] ? m.abilities[2].ability.name : "no abitlity",
                image: <img src={m.sprites.back_default} className="pok_image" />
            });
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
                    {allPokemonData.map(m => {
                        return (
                            <tr>
                                <td><Link to={`/pokemondetails/${m.name}`}><h4 className="headline_pok_name">{m.name}</h4></Link></td>
                                <td>{m.abilities[0] ? m.abilities[0].ability.name : "no abitlity"}</td>
                                <td>{m.abilities[1] ? m.abilities[1].ability.name : "no abitlity"}</td>
                                <td>{m.abilities[2] ? m.abilities[2].ability.name : "no abitlity"}</td>
                                <td><img src={m.sprites.back_default} className="pok_image" /></td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
            </MDBTable>
        );
    };


    return (
        <>
            {/* <button type="checkbox" onClick={togleAllData}>All data</button> */}
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked" onChange={togleAllData} />
                <label class="custom-control-label" for="defaultUnchecked">All data</label>
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