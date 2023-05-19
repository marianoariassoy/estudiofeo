import Item from "./Item";

const Arte = () => {
  const data = [
    {
      id: 1,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 2,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 3,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 4,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 5,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 6,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 7,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 8,
      title: "Título obra",
      subtitle: "Subtítulo",
      number: "2022",
      image: "https://images.pexels.com/photos/14198757/pexels-photo-14198757.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  return (
    <section className="px-16 pt-28 bg-secondary" id="arte">
      <div className="mb-20">
        <h1 className="font-bold text-6xl">
          arte <span className="font-extraitalic">feo</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">
          {data.map((item) => (
            <Item key={item.id} data={item} mask="2" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arte;
