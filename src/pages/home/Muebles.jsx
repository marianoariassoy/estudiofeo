import Item from "./Item";

const Muebles = () => {
  const data = [
    {
      id: 1,
      title: "Mueble Confetti",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 2,
      title: "Cama Castillo",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: "Mueble Confetti",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 4,
      title: "Mueble Confetti",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 5,
      title: "Mueble Confetti",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 6,
      title: "Mueble Confetti",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      title: "Mueble Confetti",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      title: "Mueble Confetti",
      subtitle: "Melamina",
      number: "",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section className="px-16 pt-28 bg-secondary" id="muebles">
      <div className="mb-20">
        <h1 className="font-bold text-6xl">
          muebles <span className="font-extraitalic">feos</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">
          {data.map((item) => (
            <Item key={item.id} data={item} mask="4" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Muebles;
