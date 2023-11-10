import { useEffect, useState } from "react";
import Card from "./Card";
import { useMyContext } from "../Context/AppPokemonFetchProvider";
import "./Gallery.css";
// !problement der index wegen dynamisches render mit die bibliotek uuid (npm install uuid)
import { v4 as uuidv4 } from "uuid";


const Gallery = () => {
  const { pokemonArray, typesPokemons } = useMyContext();

  // !wenn der typesArray ist leer, wird den initialArray(pokemonArray) angezeigt

  const displayArray =
    typesPokemons.length === 0 ? pokemonArray : typesPokemons;

  // useEffect(() => {
  //   console.log("Effect in Gallery: displayArray", displayArray);
  // }, [displayArray]);

  // console.log("Render in Gallery: displayArray", displayArray);

  return (

    <section className="pokeGrid">
      {displayArray.map((item) => {
        const uniqueKey = uuidv4();
        return <Card pokemon={item} key={uniqueKey} />;

      })}
    </section>
  );
};

export default Gallery;
