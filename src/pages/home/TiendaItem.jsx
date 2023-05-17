import ImageComponent from "../../components/ImageComponent";

const TiendaItem = ({ data }) => {
  return (
    <article className="tienda-item aspect-square object-cover overflow-hidden relative">
      <a href="#" className="absolute z-20 w-full h-full top-0 p-10 bg-black bg-opacity-60 flex items-end opacity-0 hover:opacity-100">
        <div className="text-white text-xl">
          <h3>{data.title}</h3>
          <h3 className="font-bold">{data.subtitle}</h3>
        </div>
      </a>
      <ImageComponent src={data.image} alt={data.alta} />
    </article>
  );
};

export default TiendaItem;
