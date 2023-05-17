import icon from "../../assets/images/icon-scroll.svg";

const Creaciones = () => {
  return (
    <section className="px-16 py-20 bg-secondary" id="creaciones">
      <div className="h-40 flex justify-between">
        <div>
          <h1 className="font-bold text-6xl">
            creaciones <span className="font-extraitalic">feas</span>
          </h1>
        </div>
        <div>
          <img src={icon} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-between creaciones-container">
        <a href="#espacios" className="scroll item-mask flex items-center justify-center relative">
          <span className="font-bold text-xl absolute z-30">Espacios</span>
          <img src="./assets/mask/mask-1.svg" className="absolute z-20 h-full hover:opacity-0 transition-opacity cursor-pointer" />
          <img src="./assets/mask/mask-1-outline.svg" className="absolute z-10 h-full" />
          <img src="https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600" className="h-full object-cover mask mask-1" />
        </a>

        <a href="#arte" className="scroll item-mask flex items-center justify-center relative">
          <span className="font-bold text-xl absolute z-30">Arte</span>
          <img src="./assets/mask/mask-2.svg" className="absolute z-20 h-full w-full hover:opacity-0 transition-opacity cursor-pointer" />
          <img src="./assets/mask/mask-2-outline.svg" className="absolute z-10 h-full" />
          <img src="https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=1600" className="h-full w-full mask mask-2" />
        </a>

        <a href="#objetos" className="scroll item-mask flex items-center justify-center relative">
          <span className="font-bold text-xl absolute z-30">Objetos</span>
          <img src="./assets/mask/mask-3.svg" className="absolute z-20 h-full hover:opacity-0 transition-opacity cursor-pointer" />
          <img src="./assets/mask/mask-3-outline.svg" className="absolute z-10 h-full" />
          <img src="https://images.pexels.com/photos/971546/pexels-photo-971546.jpeg?auto=compress&cs=tinysrgb&w=1600" className="h-full object-cover mask mask-3" />
        </a>

        <a href="#muebles" className="scroll item-mask flex items-center justify-center relative">
          <span className="font-bold text-xl absolute z-30">Muebles</span>
          <img src="./assets/mask/mask-4.svg" className="absolute z-20 h-full hover:opacity-0 transition-opacity cursor-pointer" />
          <img src="./assets/mask/mask-4-outline.svg" className="absolute z-10 h-full" />
          <img src="https://images.pexels.com/photos/2956376/pexels-photo-2956376.jpeg?auto=compress&cs=tinysrgb&w=1600" className="h-full object-cover mask mask-4" />
        </a>

        <a href="#efimeros" className="scroll item-mask flex items-center justify-center relative">
          <span className="font-bold text-xl absolute z-30">Efimeros</span>
          <img src="./assets/mask/mask-5.svg" className="absolute z-20 h-full hover:opacity-0 transition-opacity cursor-pointer" />
          <img src="./assets/mask/mask-5-outline.svg" className="absolute z-10 h-full" />
          <img src="https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=1600" className="h-full w-full object-cover mask mask-5" />
        </a>

        <a href="#alianzas" className="scroll item-mask flex items-center justify-center relative">
          <span className="font-bold text-xl absolute z-30">Alianzas</span>
          <img src="./assets/mask/mask-6.svg" className="absolute z-20 h-full hover:opacity-0 transition-opacity cursor-pointer" />
          <img src="./assets/mask/mask-6-outline.svg" className="absolute z-10 h-full" />
          <img src="https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&w=1600" className="h-full w-full object-cover mask mask-6" />
        </a>
      </div>
    </section>
  );
};

export default Creaciones;
