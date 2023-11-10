import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMyContext } from "../Context/AppPokemonFetchProvider";
import PokeLogo from "../assets/img/PokeLogo.svg";
import CloseIcon from "../assets/img/close.svg";

const Menu = () => {
  const [pokemonData, setPokemonData] = useState();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const { typesPokemons, setTypesPokemons } = useMyContext();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => {
        // Sortierung A-Z
        const sortedResults = data.results.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setPokemonData({ ...data, results: sortedResults });
      })
      .catch((err) =>
        console.error(
          "Fehler beim Fetchen der API maybe the Pokemons hide in the grass :(",
          err
        )
      );
  }, []);
  // console.log("Oh yes i catch them all",pokemonData);

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedTypes((prevTypes) => {
        const newTypes = [...prevTypes, value];
        // console.log("Thats my fucking type:", newTypes);
        return newTypes;
      });
    } else {
      setSelectedTypes((prevTypes) => {
        const newTypes = prevTypes.filter((type) => type !== value);
        // console.log("Thats my fucking type:", newTypes);
        return newTypes;
      });
    }
  };

  const handleSearch = () => {
    // Für jeden ausgewählten Typ werden Promise-Objekte erstellt.
    const promises = selectedTypes.map((type) =>
      // Jedes Promise-Objekt ist eine Anfrage an die Pokemon API für einen bestimmten Type.
      fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then((res) => res.json())
        .then((data) => data.pokemon)
    );

    // Promise.all nimmt ein Array von Promise-Objekten entgegen und gibt ein neues Promise zurück.
    Promise.all(promises)
      .then((results) => {
        // Der Code wird ausgeführt, wenn alle Promises erfolgreich wurden.
        // 'results' enthält die Daten der Promises.
        const flattenedResults = results.flatMap((result) => result);
        // Das flache Array wird im State (searchResults) gesetzt, um die gefundenen Pokemon zu speichern.
        //!hier geben die daten weiter an der typesPokemons

        // setTypesPokemons(flattenedResults);
        let pokemons = [];
        flattenedResults.forEach((elt) => pokemons.push(elt.pokemon));
        setTypesPokemons(pokemons);

        // ! hier gehen wir zu home
        navigate("/");
      })
      .catch((error) => {
        console.error(
          "Error fetching Pokemon data, psst they hiding in the deep grass",
          error
        );
      });
  };

  // useEffect(() => {
  //   console.log("2", typesPokemons);
  // }, [typesPokemons]);

  return (
    <main className="blueBG">
      <section className="typeHeader">
        <img
          src={PokeLogo}
          alt="Pokemon Logo auf der Type Page"
          className="pokemonlogo"
        />
        <Link to="/">
          <button className="closeButton">
            <img
              src={CloseIcon}
              alt="X for close the Menu"
              className="zurückImage"
            />
          </button>
        </Link>
      </section>
      <div className="description-header">
        <h2 className="textBG">TYPE</h2>
        <h2 className="orangeText2">TYPE</h2>
      </div>

      <section className="allTypeContainer">
        {pokemonData && pokemonData.results && (
          <article className="typeGrid">
            {pokemonData.results.map((type, index) => (
              <div className="typeWrapper {color-${type.name}}" key={index}>
                <label className="typeLable" data-type-name={type.name}>
                  <input
                    name="typeInput"
                    type="checkbox"
                    value={type.name}
                    onChange={handleTypeChange}
                    className="imputTypes"
                  />
                  {type.name}
                </label>
              </div>
            ))}
          </article>
        )}
      </section>
      <div className="searchWrapper">
        <button className="pokeSearch" onClick={handleSearch}>
          Search
        </button>
      </div>
    </main>
  );
};

export default Menu;
