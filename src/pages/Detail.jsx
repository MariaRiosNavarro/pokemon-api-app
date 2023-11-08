import { useState, useEffect } from "react";
import PokeDetail from "../components/PokeDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
const Detail = () => {
  const [data, setData] = useState();

  const { name } = useParams();

  // let url = `https://pokeapi.co/api/v2/pokemon/${name}`

  let url = `https://pokeapi.co/api/v2/pokemon/pikachu`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
        setData(pokemon);
      })
      .catch((error) => {
        console.error("Error Message", error);
      });
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Detail!!</h2>
      <PokeDetail pokemonItem={data} />
    </div>
  );
};

export default Detail;
