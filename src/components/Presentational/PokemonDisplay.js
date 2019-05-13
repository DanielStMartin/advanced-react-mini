import React, { Component } from "react";
import "../../App.css";
// import PokemonContainer from "./PokemonContainer";

export default function(props) {
  const pokeList = props.pokemon.map(poke => {
    return (
      <div className="pokemon-display" key={poke.id}>
        <div>{poke.name}</div>
        <div>
          <img src={poke.imageUrl} alt="pokemon" />
        </div>
      </div>
    );
  });
  return <div>{pokeList}</div>;
}
