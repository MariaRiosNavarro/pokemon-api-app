import PokeLogo from "../assets/img/PokeLogo.svg";
import NavBar from "./NavBar";

import "./Header.css";

const Header = ({ svgIcon, href }) => {
  return (
    <header>
      <img src={PokeLogo} alt="Pokemon-Logo" className="PokeLogo" />
      <NavBar svgIcon={svgIcon} href={href} />
    </header>
  );
};

export default Header;
