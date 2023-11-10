import DarkmodeIcon from "../assets/img/darkmode.svg";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { useMyContext } from "../Context/AppPokemonFetchProvider";
import { Link } from "react-router-dom";
import { initialCopyOfPokemons } from "../Context/AppPokemonFetchProvider";

const NavBar = ({ svgIcon, href }) => {
  const { setPokemonArray, typesPokemons, setTypesPokemons } = useMyContext();
  const [userInput, setUserInput] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);

  const url =
    userInput !== ""
      ? "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      : "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  let pokemons;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        pokemons = data.results.filter((pokemon) => {
          return pokemon.name.includes(userInput) ? pokemon : null;
        });

        setPokemonArray(pokemons);

        // !Setzt auf Types eine kopie des initial Array wenn der user sucht (und die gesuchte Types werden geloscht),

        userInput !== "" ? setTypesPokemons(initialCopyOfPokemons) : null;
      })
      .catch((err) => console.error("Yan junge....", err));
  }, [userInput, initialLoad, setPokemonArray, setTypesPokemons]);

  useEffect(() => {
    // !Nach dem ersten Laden, initialLoad auf false setzen
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

  return (
    <nav>
      <Link to={href}>
        <img src={svgIcon} alt="" className="HeaderIcon" />
      </Link>
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
