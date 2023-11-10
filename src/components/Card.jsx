import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ pokemon }) => {
  const [data, setData] = useState();

  // !Der Type Suche bei Menu gibt andere Type of object, damit es rendern können soll pokemon.pokemon in der fetch, hinzugefügt werden

  const pokemonObj = pokemon.pokemon || pokemon;

  useEffect(() => {
    fetch(pokemonObj.url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [pokemonObj]);

  return (
    <Link className="pokeLink" to={`/detail/${pokemon.name}`}>
      <article className="cardBG">
        <div className="imageWrapper">
          <img
            src={data?.sprites.other.dream_world.front_default}
            alt=""
            className="pokeCard"
          />
        </div>

        <div className="description">
          <p>{data?.id > 9 ? `#0${data?.id}` : `#00${data?.id}`}</p>
          <p>{pokemonObj.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
