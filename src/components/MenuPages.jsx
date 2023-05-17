import { Link } from "react-router-dom";

const MenuPages = () => {
  const menuItems = [
    {
      id: 1,
      name: "ESTUDIO",
      url: "/",
    },
    {
      id: 2,
      name: "CREACIONES",
      url: "/#creaciones",
    },
    {
      id: 3,
      name: "TIENDA",
      url: "/",
    },
    {
      id: 4,
      name: "GALERIA",
      url: "/",
    },
  ];

  return (
    <div className="nav bg-white absolute px-16 w-full h-screen -z-10">
      <nav className="flex items-center h-full">
        <ul className="text-5xl lg:text-7xl font-extra">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.url} className="menu-link">
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contacto" className="menu-link">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPages;
