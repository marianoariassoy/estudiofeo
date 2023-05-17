import Form from "./Form";
import whatsapp from "../../assets/images/whatsapp.svg";
import MenuPages from "../../components/MenuPages";
import { Link } from "react-router-dom";

const Contacto = () => {
  const OpenMenu = () => {
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("#nav-menu").classList.toggle("active");
  };

  return (
    <>
      <header className="fixed w-full top-0 z-40">
        <div className="w-full flex justify-between items-center px-16 py-20 ">
          <div className="logo">
            <Link to="/">
              <img src="./assets/images/logo.svg" alt="logo" />
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

      <main className="absolute bottom-0 w-full">
        <section className="px-16 py-20 lg:flex justify-between items-end" id="contacto">
          <div>
            <h2 className="font-extrabold mb-6">¡HABLEMOS!</h2>
            <div className="text-xl">
              <div className="flex gap-1 items-center">
                <img src={whatsapp} />
                <a href="whahttps://wa.me/5493873436896" className="hover:line-through">
                  +54 9 387 3 436 896
                </a>
              </div>
              <a href="mailto:hola@estudiofeo.com" className="hover:line-through">
                hola@estudiofeo.com
              </a>
              <br />
              Pueyrredón 190 <br />
              Salta &bull; Argentina <br />
              <a href="http://instagram.com/estudio.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                @estudio.feo
              </a>
            </div>
          </div>
          <div className="mt-8 lg:w-1/3">
            <Form />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacto;
