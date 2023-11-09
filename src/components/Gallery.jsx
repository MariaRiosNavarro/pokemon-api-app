import { useEffect, useState } from "react";
import Card from "./Card";
import { useMyContext } from "../Context/AppPokemonFetchProvider";

const Gallery = () => {
  const { pokemonArray, typesPokemons } = useMyContext();

  const displayArray =
    typesPokemons.length === 0 ? pokemonArray : typesPokemons;

  useEffect(() => {
    console.log("Effect in Gallery: displayArray", displayArray);
  }, [displayArray]);

  console.log("Render in Gallery: displayArray", displayArray);

  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {displayArray.map((item) => {
        return <Card pokemon={item} key={item.name + item.url} />;
      })}
    </section>
  );
};

export default Gallery;
