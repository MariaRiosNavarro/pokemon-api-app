import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMyContext } from "../Context/AppPokemonFetchProvider";
import Gallery from "../components/Gallery";

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
        setTypesPokemons(flattenedResults);
        console.log("1", flattenedResults);
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
    <main>
      <section>
        <img
          src="./public/img/LogoTypePage.png"
          alt="Pokemon Logo auf der Type Page"
        />
        <Link to="/">
          <button>
            <img src="./public/img/close.svg" alt="X for close the Menu" />
          </button>
        </Link>
      </section>
      <h2>TYPE</h2>
      <section className="allTypeContainer">
        {pokemonData && pokemonData.results && (
          <article>
            {pokemonData.results.map((type, index) => (
              <div key={index}>
                <label>
                  <input
                    name="typeInput"
                    type="checkbox"
                    value={type.name}
                    onChange={handleTypeChange}
                  />
                  {type.name}
                </label>
              </div>
            ))}
          </article>
        )}
      </section>
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
      <Gallery />
    </main>
  );
};

export default Menu;
