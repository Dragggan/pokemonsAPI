import React from 'react'

import {   useParams} from 'react-router-dom'

function PokemonDetails(props) {
    let { id } = useParams();
    return (
        <div>
            pokemon details : {id}
        </div>
    )
}



export default PokemonDetails

