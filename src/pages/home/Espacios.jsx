import Item from "./Item";

const Espacios = () => {
  const data = [
    {
      id: 1,
      title: "la casa de los ocho",
      subtitle: " ",
      number: ".01",
      image: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "habitación miró",
      subtitle: " ",
      number: ".03",
      image: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "cuarto escondido",
      subtitle: " ",
      number: ".03",
      image: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "aniceto",
      subtitle: " ",
      number: ".01",
      image: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "alejandro I",
      subtitle: " ",
      number: ".03",
      image: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "proyecto confetti",
      subtitle: " ",
      number: ".03",
      image: "https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <section className="px-16 pt-20 bg-secondary" id="espacios">
      <div className="mb-20">
        <h1 className="font-bold text-6xl">
          espacios <span className="font-extraitalic">feos</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">
          {data.map((item) => (
            <Item key={item.id} data={item} mask="1" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Espacios;
