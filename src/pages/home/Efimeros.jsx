import Item from "./Item";

const Efimeros = () => {
  const data = [
    {
      id: 1,
      title: "Efímeros 1",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 2,
      title: "Efímeros 2",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: "Efímeros 1",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 4,
      title: "Efímeros 1",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 5,
      title: "Efímeros 1",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 6,
      title: "Efímeros 1",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      title: "Efímeros 1",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      title: "Efímeros 1",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="px-16 py-28 bg-secondary" id="efimeros">
      <div className="mb-20">
        <h1 className="font-bold text-6xl">
          efímeros <span className="font-extraitalic">&feos</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">
          {data.map((item) => (
            <Item key={item.id} data={item} mask="5" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Efimeros;
