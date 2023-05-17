import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const GsapHeader = () => {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray(".data-light-header");
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top-=-80",
      end: "bottom top-=-80",
      toggleClass: {
        targets: "header",
        className: "header-dark",
      },
      onEnter: () => {
        const logo = document.querySelector(".logo a img");
        const menu = document.querySelectorAll("#nav-menu span");
        logo.src = "./assets/images/logo-white.svg";
        menu[0].classList.add("bg-white");
        menu[1].classList.add("bg-white");
        menu[2].classList.add("bg-white");
      },
      onLeave: () => {
        const logo = document.querySelector(".logo a img");
        const menu = document.querySelectorAll("#nav-menu span");
        logo.src = "./assets/images/logo.svg";
        menu[0].classList.remove("bg-white");
        menu[1].classList.remove("bg-white");
        menu[2].classList.remove("bg-white");
      },
      onEnterBack: () => {
        const logo = document.querySelector(".logo a img");
        const menu = document.querySelectorAll("#nav-menu span");
        logo.src = "./assets/images/logo-white.svg";
        menu[0].classList.add("bg-white");
        menu[1].classList.add("bg-white");
        menu[2].classList.add("bg-white");
      },
      onLeaveBack: () => {
        const logo = document.querySelector(".logo a img");
        const menu = document.querySelectorAll("#nav-menu span");
        logo.src = "./assets/images/logo.svg";
        menu[0].classList.remove("bg-white");
        menu[1].classList.remove("bg-white");
        menu[2].classList.remove("bg-white");
      },
      markers: false,
    });
  });
};

export default GsapHeader;
