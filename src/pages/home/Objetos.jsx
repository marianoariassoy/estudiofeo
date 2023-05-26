import Item from "./Item";
import { useDataContext } from "../../context/lanContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Objetos = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/objetos/${lan}`);

  return (
    <section className="px-16 pt-28 bg-secondary" id="objetos">
      <div className="mb-20">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "objetos" : "objects"} <span className="font-extraitalic">feos</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="3" />)}</div>
      </div>
    </section>
  );
};

export default Objetos;
