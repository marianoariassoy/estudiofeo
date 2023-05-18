import MenuPages from "./MenuPages";
import { Link } from "react-router-dom";

const Header = () => {
  const OpenMenu = () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  return (
    <header className="fixed w-full top-0 z-40">
      <div className="w-full flex justify-between items-center px-16 py-20 ">
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/logo.svg" alt="logo" />
          </Link>
        </div>
        <div id="nav-menu" onClick={OpenMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <MenuPages />
    </header>
  );
};

export default Header;
