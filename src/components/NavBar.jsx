import MenuIcon from "../assets/img/menu.svg";
import DarkmodeIcon from "../assets/img/darkmode.svg";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { useMyContext } from "../Context/AppPokemonFetchProvider";

const NavBar = () => {
  const { setPokemonArray } = useMyContext();
  const [userInput, setUserInput] = useState();

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

  let pokemons;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        pokemons = data.results.filter((pokemon) => {
          return pokemon.name.includes(userInput) ? pokemon : null;
        });
        setPokemonArray(pokemons);
        console.log(pokemons);
      })
      .catch((err) => console.error("Yan junge....", err));
  }, [userInput]);

  return (
    <nav>
      <img src={MenuIcon} alt="" className="HeaderIcon" />

      <form action="#">
        <input
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Search Pokemon"
        />
      </form>

      <img src={DarkmodeIcon} alt="" className="HeaderIcon" />
    </nav>
  );
};

export default NavBar;
