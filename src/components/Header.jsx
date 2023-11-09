import PokeLogo from "../assets/img/PokeLogo.svg";
import NavBar from "./NavBar";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={PokeLogo} alt="Pokemon-Logo" className="PokeLogo" />
      <NavBar />
    </header>
  );
};

export default Header;
