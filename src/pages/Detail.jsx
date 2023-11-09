import { useState, useEffect } from "react";
import PokeDetail from "../components/PokeDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Header from "../components/Header";
import BackIcon from "../assets/img/back.svg";

const Detail = () => {
  const [onePokemon, setOnePokemon] = useState("");
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
        setOnePokemon(pokemon);
      })
      .catch((error) => {
        console.error("Error Message", error);
      });
  }, []);

  return loading ? (
    <div>
      <Header />
      <Loading />
    </div>
  ) : (
    <div>
      <Header svgIcon={BackIcon} href="/" />
      <PokeDetail pokemonItem={onePokemon} />
    </div>
  );
};

export default Detail;
