import { useEffect, useState } from "react";
import Card from "./Card";
import { useMyContext } from "../Context/AppPokemonFetchProvider";
import "./Gallery.css";

const Gallery = () => {
  const { pokemonArray } = useMyContext();

  return (
    <section className="pokeGrid">
      {pokemonArray.map((item) => {
        return <Card pokemon={item} key={item.url} />;
      })}
    </section>
  );
};

export default Gallery;
