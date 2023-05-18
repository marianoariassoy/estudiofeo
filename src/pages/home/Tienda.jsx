import icon from "../../assets/images/icon-filter.svg";
import close from "../../assets/images/close-2.svg";
import TiendaItem from "./TiendaItem";

const Tienda = () => {
  const data = [
    {
      id: 1,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/6775289/pexels-photo-6775289.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/4906284/pexels-photo-4906284.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/6775289/pexels-photo-6775289.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/4906284/pexels-photo-4906284.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/4906284/pexels-photo-4906284.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      title: "Grifería Lavatorio",
      subtitle: "Modena Tres",
      image: "https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <>
      <section className="px-16 py-20 pb-10 bg-secondary" id="tienda">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-bold text-6xl">
              tienda <span className="font-extraitalic">feo</span>
            </h1>
          </div>
          <div className="flex items-center gap-2 font-bold">
            Filtrar
            <img src={icon} />
          </div>
        </div>
        <div className="text-xl mb-10">Descubrí nuestro catálogo y agendá una cita para un asesoramiento personalizado en nuestro showroom.</div>
        <div className="flex gap-4">
          <button className="border-2 border-black rounded-full px-4 py-1 font-bold flex gap-2 items-center hover:opacity-60">
            Grifería <img src={close} />
          </button>
          <button className="border-2 border-black rounded-full px-4 py-1 font-bold flex gap-2 items-center hover:opacity-60">
            Negro <img src={close} />
          </button>
        </div>
      </section>

      <section className="px-16 grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 bg-secondary">
        {data.map((item) => (
          <TiendaItem key={item.id} data={item} />
        ))}
      </section>
    </>
  );
};

export default Tienda;
