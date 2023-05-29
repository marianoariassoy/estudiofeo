import { Helmet } from "react-helmet";

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
import Estudio from "./Estudio";

const HomeContainer = () => {
  return (
    <>
      <Helmet>
        <title>FEO</title>
        <meta
          name="description"
          content="Imaginemos.
Mundos que sean mezclas geniales de arte y funcionalidad estructural donde se entrelazan inextricablemente. Una razón proyectual capaz de conjugar la inspiración artística con las normativas funcionales. Mundos en el que los proyectistas, a través de líneas que trazan movimientos de pura expresividad, infundan en la materia del objeto su energía vital, la propia, y que ella se exprese en su forma. Arte aplicado a la industria, poesía utilitaria."
        />
        <meta property="og:title" content="FEO" />
        <meta property="og:url" content="https://estudiofeo.com" />
        <meta property="og:image" content="https://www.estudiofeo.com/assets/images/feo.jpg" />
        <meta property="og:image:alt" content="Estudio Feo" />
      </Helmet>

      <header className="fixed w-full top-0 z-40">
        <NavBar />
      </header>
      <main>
        <Slider />
        <Estudio />
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
      </main>
    </>
  );
};

export default HomeContainer;
