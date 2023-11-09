import { useEffect, useState } from "react";
import Card from "./Card";

const Gallery = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error("Yan, was hast du nur getan....", err));
  }, []);

  return (
    <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map((item, index) => {
        return <Card pokemon={item} key={index} />;
      })}
    </section>
  );
};

export default Gallery;
