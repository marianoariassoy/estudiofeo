import Item from "./Item";

const Alianzas = () => {
  const data = [
    {
      id: 1,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 2,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 3,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 4,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 5,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 6,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 7,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 8,
      title: "Alianzas",
      subtitle: "Subtitulo",
      number: "",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  return (
    <section className="px-16 p-20 bg-secondary" id="alianzas">
      <div className="mb-20">
        <h1 className="font-bold text-6xl">
          alianzas <span className="font-extraitalic">feas</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">
          {data.map((item) => (
            <Item key={item.id} data={item} mask="6" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alianzas;
