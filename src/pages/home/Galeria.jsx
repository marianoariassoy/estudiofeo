import ImageComponent from "../../components/ImageComponent";

const Galeria = () => {
  return (
    <>
      <section className="px-16 pt-28 pb-10 bg-secondary" id="galeria">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-6xl">
              galería <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div>
            <button className="border-2 border-black rounded-full px-4 py-1 font-bold hover:opacity-60">VER EXPOSICIONES ANTERIORES</button>
          </div>
        </div>
      </section>

      <section className="data-light-header">
        <article className="galeria-item grid lg:grid-cols-2">
          <div className="bg-black p-16 text-secondary flex flex-col justify-between aspect-square lg:aspect-auto">
            <div>
              <h3 className="text-xl">Diciembre 2022</h3>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8">Pérez Caula</h1>
            </div>
            <div className="font-bold">
              Muestra colectiva
              <br />
              Design suites
            </div>
          </div>
          <div className="overflow-hidden aspect-square lg:aspect-auto">
            <ImageComponent src="https://images.pexels.com/photos/6011998/pexels-photo-6011998.png?auto=compress&cs=tinysrgb&w=1600" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Galeria;
