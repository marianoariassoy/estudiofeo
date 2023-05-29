import { Link } from "react-router-dom";
import { useDataContext } from "../context/lanContext";

const MenuPages = () => {
  const { lan, setLan } = useDataContext();

  const menuItems = [
    {
      id: 1,
      title: "NOVEDADES",
      title_eng: "NEWS",
      url: "/",
    },
    {
      id: 2,
      title: "ESTUDIO",
      title_eng: "STUDIO",
      url: "/",
    },
    {
      id: 3,
      title: "CREACIONES",
      title_eng: "CREATIONS",
      url: "/",
    },
    {
      id: 4,
      title: "TIENDA",
      title_eng: "SHOP",
      url: "/",
    },
    {
      id: 5,
      title: "GALERIA",
      title_eng: "GALLERY",
      url: "/",
    },
    {
      id: 6,
      title: "CONTACTO",
      title_eng: "CONTACT",
      url: "/",
    },
  ];

  return (
    <div className="nav bg-white absolute px-16 w-full h-screen -z-10">
      {lan === "es" ? (
        <button className="font-bold absolute left-16 bottom-20 mt-1 hover:opacity-70 cursor-pointer z-50" onClick={() => setLan("en")}>
          ENGLISH
        </button>
      ) : (
        <button className="font-bold absolute left-16 bottom-20 mt-1 hover:opacity-70 cursor-pointer z-50" onClick={() => setLan("es")}>
          ESPAÑOL
        </button>
      )}

      <nav className="flex items-center h-full">
        <ul className="text-5xl lg:text-7xl font-extra">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.url} className="menu-link">
                {lan === "es" ? item.title : item.title_eng}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuPages;
