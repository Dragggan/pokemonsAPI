import React from 'react';
import {Table} from 'semantic-ui-react'
function Main({ allPokemonData }) {

   const  renderBodyRow =(name,url)=> {
        console.log(name,url);
    }


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
                            <tr key={i} onClick={() => {renderBodyRow(m.name,m.url)}}>
                                <td>{m.name}</td>
                                <td><span className="url">{m.url}</span></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
