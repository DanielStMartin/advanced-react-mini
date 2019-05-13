import React from 'react';
import myHOC from './myHOC';


function Pokemon(props){
    const pokeList = props.data.map(pokemon => {
        return <div className='pokemon-display' key={pokemon.id}>
        <div>{pokemon.name}</div>
        <div>
            <img src={pokemon.imageUrl} alt='pokemon'/>
        </div>
        </div>
    })
    return(
        <div>
            {pokeList}
        </div>
    )
}
export default myHOC(Pokemon, 'https://api.pokemontcg.io/v1/cards?setCode=base1' )