import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = () => {
  const [pokemonData, setPokemonData] = useState();
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.error("Fehler beim Fetchen der API", err));
  }, []);
  console.log(pokemonData);
  return (
    <main>
      <section>
        <img
          src="./public/img/LogoTypePage.png"
          alt="Pokemon Logo auf der Type Page"
        />
        <button>
          <img src="./public/img/close.svg" alt="X for close the Menu" />
        </button>
      </section>
      <h2>TYPE</h2>
      <section className="allTypeContainer">
        {pokemonData && pokemonData.results && (
          <article>
            {pokemonData.results.map((type, index) => (
              <div key={index}>
                <Link to={type.url}>{type.name}</Link>
              </div>
            ))}
          </article>
        )}
      </section>
    </main>
  );
};

export default Menu;
