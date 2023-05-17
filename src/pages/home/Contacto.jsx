import Form from "./Form";
import whatsapp from "../../assets/images/whatsapp.svg";

const Contacto = () => {
  return (
    <section className="px-16 py-20 lg:flex justify-between items-end bg-secondary" id="contacto">
      <div>
        <h2 className="font-extrabold mb-6">¡HABLEMOS!</h2>
        <p className="text-xl">
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
        </p>
      </div>
      <div className="mt-8 lg:w-1/4">
        <Form />
      </div>
    </section>
  );
};

export default Contacto;
