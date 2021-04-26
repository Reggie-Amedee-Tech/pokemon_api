import React, { useState, useEffect } from 'react';
import axios from 'axios'

const PokemonAPI = (props) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        console.log("Tryna figure this shit out!")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { setPokemon(response.data.results) })
    }, [])

    return (
        <div>
        {pokemon.map((pokemon, index) => {
            return (<div key={index}>{pokemon.name}</div>)
        })}
    </div>

    )

}
export default PokemonAPI;

