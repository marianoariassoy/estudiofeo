import Form from "./Form";
import instagramIcon from "../../assets/images/instagram.svg";
import behanceIcon from "../../assets/images/behance.svg";
import pointsIcon from "../../assets/images/points.svg";

const Contacto = () => {
  return (
    <>
      <section className="px-16 py-28 lg:flex justify-between items-end  bg-secondary" id="contacto">
        <div>
          <div className="text-xl">
            <div>+54 9 387 4848331 | +54 9 387 3436896</div>
            <div>Pueyrredón 190 &bull; Salta | Argentina</div>
            <div>
              <a href="mailto:hola@estudiofeo.com" className="hover:line-through">
                hola@estudiofeo.com
              </a>
            </div>
            <div className="flex gap-3">
              <img src={instagramIcon} />
              <a href="https://instagram.com/estudiofeo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                @estudiofeo
              </a>
              |
              <a href="https://instagram.com/tienda.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                @tienda.feo
              </a>
              |
              <a href="https://instagram.com/galeria.feo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                @galeria.feo
              </a>
            </div>
            <div className="flex gap-3">
              <img src={behanceIcon} />
              <a href="https://behance.net/estudiofeo" target="_blank" rel="noopener noreferrer" className="hover:line-through">
                behance.net/estudiofeo
              </a>
            </div>
            <div className="mb-6 mt-6">
              <img src={pointsIcon} />
            </div>
            <div className="font-extraitalic">www.estudiofeo.com</div>
          </div>
        </div>
        <div className="mt-8 lg:w-1/3">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Contacto;
