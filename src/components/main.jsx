import React from 'react';

function Main({ allPokemonData }) {


    const tableRowEvents = {
        onClick: (e, row, rowIndex) => {
          console.log(`clicked on row with index: ${rowIndex}`);
        },
        onMouseEnter: (e, row, rowIndex) => {
          console.log(`enter on row with index: ${rowIndex}`);
        }
     }


    return (
        <div>

<table class="ui celled table">
  <thead>
    <tr><th>Name</th>
    <th>Age</th>
    <th>Job</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">James</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Jill</td>
      <td data-label="Age">26</td>
      <td data-label="Job">Engineer</td>
    </tr>
    <tr>
      <td data-label="Name">Elyse</td>
      <td data-label="Age">24</td>
      <td data-label="Job">Designer</td>
    </tr>
  </tbody>
</table>












            {/* <Table striped bordered hover  rowEvents={ tableRowEvents }>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {allPokemonData && allPokemonData.map((m,i) => {
                        return (
                            <tr key={i}>
                                <td>{m.name}</td>
                                <td><span className="url">{m.url}</span></td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table> */}
        </div>
    );
}

export default Main;
