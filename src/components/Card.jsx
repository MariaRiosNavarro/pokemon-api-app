import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <Link style={{ textDecoration: "none" }} to={`/detail/${pokemonObj.name}`}>
      <article style={{ border: "2px solid black" }}>
        <div className="imageWrapper">
          <img src={data?.sprites.front_default} alt="" />
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="description"
        >
          <p>{data?.id > 9 ? `#0${data?.id}` : `#00${data?.id}`}</p>
          <p>{pokemonObj.name}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
