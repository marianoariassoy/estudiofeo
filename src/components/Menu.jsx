import { useDataContext } from "../context/lanContext";

const Menu = () => {
  const { lan, setLan } = useDataContext();

  const menuItems = [
    {
      id: 1,
      title: "NOVEDADES",
      title_eng: "NEWS",
      url: "#novedades",
    },
    {
      id: 2,
      title: "ESTUDIO",
      title_eng: "STUDIO",
      url: "#estudio",
    },
    {
      id: 3,
      title: "CREACIONES",
      title_eng: "CREATIONS",
      url: "#creaciones",
    },
    {
      id: 4,
      title: "TIENDA",
      title_eng: "SHOP",
      url: "#tienda",
    },
    {
      id: 5,
      title: "GALERIA",
      title_eng: "GALLERY",
      url: "#galeria",
    },
    {
      id: 6,
      title: "CONTACTO",
      title_eng: "CONTACT",
      url: "#contacto",
    },
  ];

  return (
    <div className="nav bg-white absolute px-16 w-full h-screen -z-10">
      {lan === "es" ? (
        <button className="font-bold absolute right-16 bottom-20 mt-1 hover:opacity-70 cursor-pointer z-50" onClick={() => setLan("en")}>
          ENGLISH
        </button>
      ) : (
        <button className="font-bold absolute right-16 bottom-20 mt-1 hover:opacity-70 cursor-pointer z-50" onClick={() => setLan("es")}>
          ESPAÑOL
        </button>
      )}

      <nav className="flex items-center h-full">
        <ul className="text-5xl lg:text-7xl font-extra">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className="menu-link scroll">
                {lan === "es" ? item.title : item.title_eng}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
