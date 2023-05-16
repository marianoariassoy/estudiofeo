import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Loader from "../../components/Loader";

const SliderItem = ({ src, date, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative slider-home">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="absolute bottom-0 z-10 text-white px-16 py-20">
            <a href="#" className="text-white hover:text-black">
              <h2 className="font-extraitalic text-3xl">{date}</h2>
              <h1 className="font-extrabold text-6xl">{title}</h1>
            </a>
          </div>
          <img src={src} alt={title} className="h-full w-full object-cover" />
        </>
      )}
    </div>
  );
};

const data = [
  {
    id: 1,
    date: "Diciembre 2022",
    title: "Fiesta fea",
    image: "https://images.pexels.com/photos/1230397/pexels-photo-1230397.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    id: 2,
    date: "Noviembre 2022",
    title: "Nueva web",
    image: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    id: 3,
    date: "Diciembre 2022",
    title: "Fiesta fea",
    image: "https://images.pexels.com/photos/1230397/pexels-photo-1230397.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
  {
    id: 4,
    date: "Diciembre 2022",
    title: "Fiesta fea",
    image: "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
];

const Slider = () => {
  const properties = {
    arrows: false,
    transitionDuration: 600,
    pauseOnHover: false,
    autoplay: true,
    indicators: true,
  };

  return (
    <section className="mt-44">
      <Slide {...properties}>
        {data.map((item) => (
          <SliderItem key={item.id} src={item.image} date={item.date} title={item.title} />
        ))}
      </Slide>
    </section>
  );
};

export default Slider;
