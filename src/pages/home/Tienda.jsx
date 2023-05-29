import { useDataContext } from "../../context/lanContext";
import TiendaItem from "./TiendaItem";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Tienda = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/tienda/${lan}`);

  return (
    <>
      <section className="px-16 pt-20 pb-10 bg-secondary" id="tienda">
        <div className="mb-10">
          <h1 className="font-bold text-6xl">
            {lan === "es" ? "tienda" : "shop"} <span className="font-extraitalic">feo</span>
          </h1>
        </div>
        <div className="text-xl mb-10">
          {lan === "es" ? "Descubrí nuestro catálogo y agendá una cita para un asesoramiento personalizado en nuestro showroom." : "Discover our catalog and schedule an appointment for personalized advice in our showroom."}
        </div>
      </section>

      <section className="px-16 grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-4 bg-secondary">{loading ? <Loader /> : data.map((item) => <TiendaItem key={item.id} data={item} />)}</section>
    </>
  );
};

export default Tienda;
