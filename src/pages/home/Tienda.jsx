import { useEffect } from "react";
import { useDataContext } from "../../context/lanContext";
import TiendaItem from "./TiendaItem";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import GsapLogo from "../../utils/GsapLogo";

const Tienda = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/tienda/${lan}`);
  const { data: dataTextos, loading: loadingTextos } = useFetch(`/textos`);

  useEffect(() => {
    GsapLogo(".data-hidden-tienda");
  }, []);

  return (
    <>
      <section className="px-16 pt-20 pb-10 bg-secondary" id="tienda">
        <div className="data-hidden-tienda mb-10">
          <h1 className="font-bold text-6xl">
            {lan === "es" ? "tienda" : "shop"} <span className="font-extraitalic">feo</span>
          </h1>
        </div>
        <div className="text-xl mb-10">{loadingTextos ? "" : lan === "es" ? dataTextos[0].text : dataTextos[0].text_eng}</div>
      </section>

      <section className="galeria-container px-16 grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 gap-4 bg-secondary">{loading ? <Loader /> : data.map((item) => <TiendaItem key={item.id} data={item} />)}</section>
    </>
  );
};

export default Tienda;
