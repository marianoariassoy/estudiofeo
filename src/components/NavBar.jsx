import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import logo from "../assets/images/logo.svg";
import Menu from "./Menu";

const NavBar = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let links = gsap.utils.toArray("nav a");

    links.forEach((a) => {
      let element = document.querySelector(a.getAttribute("href")),
        linkST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
      ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActive(a),
      });
      a.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
        document.querySelector(".nav").classList.remove("active");
        document.querySelector("#nav-menu").classList.remove("active");
      });
    });

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
      });
    });

    function setActive(link) {
      links.forEach((el) => {
        el.classList.remove("nav-active");
      });
      link.classList.add("nav-active");
    }
  }, []);

  const OpenMenu = () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  return (
    <header className="fixed w-full top-0 z-40">
      <div className="w-full flex justify-between items-center px-16 py-20 ">
        <div className="logo">
          <a href="#slider" className="scroll">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div id="nav-menu" onClick={OpenMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <Menu />
    </header>
  );
};

export default NavBar;
