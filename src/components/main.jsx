import React from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

// const columns = _.times(16, (i) => (
//     <Grid.Column key={i}>
//         <h5>sfdsfds</h5>
//       <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
//     </Grid.Column>
//   ))

const Main = ({ allPokemonData }) => {

    return (
     <div><MDBTable>
     <MDBTableHead>
       <tr>
         <th>#</th>
         <th>First</th>
         <th>Last</th>
         <th>Handle</th>
       </tr>
     </MDBTableHead>
     <MDBTableBody>
       <tr>
         <td>1</td>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
       </tr>
       <tr>
         <td>2</td>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
       </tr>
       <tr>
         <td>3</td>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
       </tr>
     </MDBTableBody>
   </MDBTable></div>
    );


};

export default Main;
