import icon from "../../assets/images/icon-scroll.svg";
import Item from "./ItemMain";

const Creaciones = () => {
  const data = [
    {
      id: 1,
      title: "Espacios",
      url: "#espacios",
      image: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Arte",
      url: "#arte",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 3,
      title: "Objetos",
      url: "#objetos",
      image: "https://images.pexels.com/photos/1139785/pexels-photo-1139785.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      title: "Muebles",
      url: "#muebles",
      image: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      title: "Efimeros",
      url: "#efimeros",
      image: "https://images.pexels.com/photos/15217430/pexels-photo-15217430.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      title: "Alianzas",
      url: "#alianzas",
      image: "https://images.pexels.com/photos/16807491/pexels-photo-16807491.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  return (
    <section className="px-16 pt-28 bg-secondary" id="creaciones">
      <div className="flex justify-between items-center mb-20">
        <div>
          <h1 className="font-bold text-6xl">
            creaciones <span className="font-extraitalic">feas</span>
          </h1>
        </div>
        <div>
          <img src={icon} />
        </div>
      </div>

      <div className="items-container-main pb-14">
        <div className="items-container">
          {data.map((item) => (
            <Item key={item.id} data={item} mask={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creaciones;
