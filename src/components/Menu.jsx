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
    {
      id: 5,
      name: "CONTACTO",
      url: "#contacto",
    },
  ];

  return (
    <div className="nav bg-white absolute px-16 w-full h-screen -z-10">
      <nav className="flex items-center h-full">
        <ul className="text-5xl lg:text-7xl font-extra">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className="menu-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
