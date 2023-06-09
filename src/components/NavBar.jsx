import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useDataContext } from "../context/lanContext";

import Menu from "./Menu";

const NavBar = () => {
  const { lan, setLan } = useDataContext();

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let linksOthers = gsap.utils.toArray(".scroll");
    linksOthers.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
        document.querySelector(".nav").classList.remove("active");
        document.querySelector("#nav-menu").classList.remove("active");
      });
    });
  }, []);

  const OpenMenu = () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("#nav-menu").classList.toggle("active");
    const logo = document.querySelector(".logo a img");
    const menu = document.querySelectorAll("#nav-menu span");
    logo.src = "./assets/images/logo.svg";
    menu[0].classList.remove("bg-white");
    menu[1].classList.remove("bg-white");
    menu[2].classList.remove("bg-white");
  };

  return (
    <>
      <div className="w-full flex justify-between items-center px-16 py-20 ">
        <div className="logo">
          <a href="#slider" className="scroll">
            <img src="./assets/images/logo.svg" alt="logo" className="logo-main" />
          </a>
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

      <Menu />
    </>
  );
};

export default NavBar;
