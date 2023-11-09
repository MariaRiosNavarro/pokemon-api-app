import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppPokemonFetchProvider = ({ children }) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const [pokemonArray, setPokemonArray] = useState([]);
  const [typesPokemons, setTypesPokemons] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonArray(data.results);
      })
      .catch((err) => console.error("OH NO,💣 was hast du nur getan❌", err));
  }, []);

  return (
    <AppContext.Provider
      value={{ pokemonArray, setPokemonArray, typesPokemons, setTypesPokemons }}
    >
      {children}
    </AppContext.Provider>
  );
};
