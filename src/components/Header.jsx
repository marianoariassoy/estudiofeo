import MenuPages from "./MenuPages";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/lanContext";

const Header = () => {
  const { lan, setLan } = useDataContext();

  const OpenMenu = () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  return (
    <header className="fixed w-full top-0 z-40">
      <div className="w-full flex justify-between items-center px-16 py-20">
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex gap-4">
          {lan === "es" ? (
            <button className="font-bold hover:opacity-70 cursor-pointer" onClick={() => setLan("en")}>
              EN
            </button>
          ) : (
            <button className="font-bold hover:opacity-70 cursor-pointer" onClick={() => setLan("es")}>
              ES
            </button>
          )}
          <div id="nav-menu" className="menu-main" onClick={OpenMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <MenuPages />
    </header>
  );
};

export default Header;
