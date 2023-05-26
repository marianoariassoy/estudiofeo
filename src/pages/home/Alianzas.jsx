import Item from "./Item";
import { useDataContext } from "../../context/lanContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Alianzas = () => {
  const { lan } = useDataContext();
  const { data, loading } = useFetch(`/alianzas/${lan}`);

  return (
    <section className="px-16 p-28 bg-secondary" id="alianzas">
      <div className="mb-20">
        <h1 className="font-bold text-6xl">
          {lan === "es" ? "alianzas" : "aliances"} <span className="font-extraitalic">feas</span>
        </h1>
      </div>

      <div className="items-container-main pb-12">
        <div className="items-container">{loading ? <Loader /> : data && data.map((item) => <Item key={item.id} data={item} mask="6" />)}</div>
      </div>
    </section>
  );
};

export default Alianzas;
