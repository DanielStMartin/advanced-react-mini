import React from "react";
import { Switch, Route } from "react-router-dom";
//Components
import PokemonContainer from "./components/Presentational/PokemonContainer";
import Pokemon from "./components/HOC/Pokemon";
import DataFetcher from "./components/RenderProps/DataFetcher";
import PokemonRender from "./components/RenderProps/PokemonRender";
import PropTypes from "./components/PropTypes/ParentPropType";

export default (
  <Switch>
    Presentational
    <Route exact path="/" component={PokemonContainer} />
    HOC
    <Route path="/pokemon-hoc" component={Pokemon} />
    Render Props
    <Route
      path="/pokemon-renderprops"
      render={() => {
        return (
          <DataFetcher
            url="https://api.pokemontcg.io/v1/cards?setCode=base1"
            renderDemPokemon={data => {
              return <PokemonRender data={data} />;
            }}
          />
        );
      }}
    />
    PropTypes
    <Route path="/prop-types" component={PropTypes} />
  </Switch>
);
