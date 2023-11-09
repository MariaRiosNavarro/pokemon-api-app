import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppPokemonFetchProvider = ({ children }) => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonArray(data.results);
      })
      .catch((err) => console.error("MARIA!, was hast du nur getan....", err));
  }, []);

  return (
    <AppContext.Provider value={{ pokemonArray, setPokemonArray }}>
      {children}
    </AppContext.Provider>
  );
};
