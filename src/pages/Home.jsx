import Gallery from "../components/Gallery";
import Header from "../components/Header";
import MenuIcon from "../assets/img/menu.svg";
import { AppPokemonFetchProvider } from "../Context/AppPokemonFetchProvider";

const Home = () => {
  // !Der App Provider hier habe ich entfernt, da Problemen für den typesFetch gemacht hat. Jetzt ist nur bei der App
  //! Evt. kann man ein Loading auch in der Gallery hinzufügen Page
  return (

    <div className="blueBG">
      <Header svgIcon={MenuIcon} href="/menu" />
      <Gallery />
    </div>
  );
};

export default Home;
