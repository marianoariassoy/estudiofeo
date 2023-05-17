import { NavLink } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "ESTUDIO",
      url: "#estudio",
    },
    {
      id: 2,
      name: "CREACIONES",
      url: "#creaciones",
    },
    {
      id: 3,
      name: "TIENDA",
      url: "#tienda",
    },
    {
      id: 4,
      name: "GALERIA",
      url: "#galeria",
    },
  ];

  return (
    <div className="nav bg-white absolute px-16 w-full h-screen -z-10">
      <nav className="flex items-center h-full">
        <ul className="text-5xl lg:text-7xl font-extra">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className="menu-link scroll">
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <NavLink to="/contacto" className="menu-link">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
