import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ pokemon }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Yan langsam reichts aber auch...", err));
  }, []);

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
          <p>{pokemon.name}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
