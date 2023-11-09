import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Yan langsam reichts aber auch...", err));
  }, []);

  return (
    <Link style={{ textDecoration: "none" }} to={`/detail/${pokemon.name}`}>
      <article style={{ border: "2px solid black" }}>
        <div className="imageWrapper">
          <img src={data?.sprites.front_default} alt="" />
        </div>

        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="description"
        >
          <p>{data?.id > 9 ? `#0${data?.id}` : `#00${data?.id}`}</p>
          <p>{pokemon.name}</p>
        </div>
      </article>
    </Link>
  );
};

export default Card;
