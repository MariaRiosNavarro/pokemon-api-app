import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Pikachu from "../assets/img/pikachu.gif";

const Card = ({ pokemon }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  // !Der Type Suche bei Menu gibt andere Type of object, damit es rendern können soll pokemon.pokemon in der fetch, hinzugefügt werden

  // const aufgeloestesPokemon = pokemon.pokemon.flatMap((p) => p);
  // console.log(aufgeloestesPokemon);

  const pokemonObj = pokemon.pokemon || pokemon;

  useEffect(() => {
    fetch(pokemonObj.url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [pokemonObj]);

  const dynamicID = () => {
    let id;

    switch (true) {
      case String(data?.id).length === 3:
        id = `#${data?.id}`;
        break;

      case String(data?.id).length === 2:
        id = `#0${data?.id}`;
        break;

      case String(data?.id).length === 1:
        id = `#00${data?.id}`;
        break;

      default:
        id = `#${data?.id}`;
        break;
    }

    return id;
  };

  return (
    <Link className="pokeLink" to={`/detail/${pokemon.name}`}>
      <article className="cardBG">
        <div className="imageWrapper">
          {loading ? (
            <img className="pikachu-gif" src={Pikachu} alt="" />
          ) : (
            <img
              src={
                data?.sprites.other.dream_world.front_default == null
                  ? data?.sprites.front_default
                  : data?.sprites.other.dream_world.front_default
              }
              alt=""
              className="pokeCard"
            />
          )}
        </div>

        <div className="description">
          <p>{dynamicID()}</p>
          <p>
            {pokemonObj.name.charAt(0).toUpperCase() + pokemon.name?.slice(1)}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
