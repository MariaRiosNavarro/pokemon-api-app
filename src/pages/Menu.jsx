import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMyContext } from "../Context/AppPokemonFetchProvider";
import PokeLogo from "../assets/img/PokeLogo.svg";
import CloseIcon from "../assets/img/close.svg";

const getColorForType = (typeName) => {
  switch (typeName) {
    case "bug":
      return "#3bb900";
    case "dark":
      return "#1c1c1c";
    case "dragon":
      return "#00458a";
    case "fairy":
      return "#ffc2f9";
    case "electric":
      return "#ffe600";
    case "shadow":
      return "#668b8b";
    case "fighting":
      return "#e40000";
    case "fire":
      return "#ff9900";
    case "flying":
      return "#ccdadd";
    case "ghost":
      return "#5a1e64";
    case "grass":
      return "#57921c";
    case "ground":
      return "#965a00";
    case "ice":
      return "#6ad2ff";
    case "normal":
      return "#b3b3b3";
    case "plant":
      return "#70df00";
    case "poison":
      return "#ab00ae";
    case "psychic":
      return "#ff81f2";
    case "rock":
      return "#e1b237";
    case "steel":
      return "#2a4950";
    case "water":
      return "#00a0e4";
    case "unknown":
      return "#fa8072";
    // Füge hier weitere Fälle für die verschiedenen Pokémon-Typen hinzu
    default:
      return "#FFFFFF"; // Standardfarbe, falls der Typ nicht übereinstimmt
  }
};

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
              <div
                key={index}
                className="typeWrapper"
                style={{ backgroundColor: getColorForType(type.name) }}
              >
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
