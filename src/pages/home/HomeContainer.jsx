import NavBar from "../../components/NavBar";
import Alianzas from "./Alianzas";
import Arte from "./Arte";
import Creaciones from "./Creaciones";
import Efimeros from "./Efimeros";
import Espacios from "./Espacios";
import Galeria from "./Galeria";
import Muebles from "./Muebles";
import Objetos from "./Objetos";
import Slider from "./Slider";
import Tienda from "./Tienda";
import Contacto from "../contacto/Contacto";

const HomeContainer = () => {
  return (
    <>
      <header className="fixed w-full top-0 z-40">
        <NavBar />
      </header>
      <main>
        <Slider />
        <Creaciones />
        <Tienda />
        <Galeria />
        <Espacios />
        <Arte />
        <Objetos />
        <Muebles />
        <Efimeros />
        <Alianzas />
      </main>
    </>
  );
};

export default HomeContainer;
