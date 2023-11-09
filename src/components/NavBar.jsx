import MenuIcon from "../assets/img/menu.svg";
import DarkmodeIcon from "../assets/img/darkmode.svg";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <img src={MenuIcon} alt="" className="HeaderIcon" />

      <form action="#">
        <input type="text" placeholder="Search Pokemon" />
      </form>

      <img src={DarkmodeIcon} alt="" className="HeaderIcon" />
    </nav>
  );
};

export default NavBar;
