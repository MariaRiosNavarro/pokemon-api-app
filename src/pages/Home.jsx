import Gallery from "../components/Gallery";
import Header from "../components/Header";
import MenuIcon from "../assets/img/menu.svg";
import { AppPokemonFetchProvider } from "../Context/AppPokemonFetchProvider";

const Home = () => {
  return (
    <div>
      <Header svgIcon={MenuIcon} href="/menu" />
      <Gallery />
    </div>
  );
};

export default Home;
