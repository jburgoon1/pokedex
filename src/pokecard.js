import React from 'react'


const Pokecard = ({pokedex}) =>{
    return pokedex.map(poke => {
     return (<div className="pokecard">
    <h3 className="pokecard-name">{poke.name}</h3>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt="pokemon"></img>
    <h3 className="pokecard-type">{poke.type}</h3>
    <h3 className="pokecard-exp">{poke.base_experience}</h3>
    </div>)
     
    })
    
}

export default Pokecard;