import { useEffect, useState } from "react";
import Card from "./Card";
import {
  useMyContext,
  AppPokemonFetchProvider,
} from "../Context/AppPokemonFetchProvider";

const Gallery = () => {
  const { pokemonArray } = useMyContext();

  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {pokemonArray.map((item) => {
        return <Card pokemon={item} key={item.url} />;
      })}
    </section>
  );
};

export default Gallery;
