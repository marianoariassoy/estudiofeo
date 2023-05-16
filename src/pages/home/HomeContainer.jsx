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
import Contacto from "./Contacto";

const HomeContainer = () => {
  return (
    <>
      <NavBar />
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
      <Contacto />
    </>
  );
};

export default HomeContainer;
