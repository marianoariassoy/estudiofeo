import { Link } from "react-router-dom";

const Item = ({ data, mask }) => {
  return (
    <Link to="/post/10" className="item-mask items-center justify-center relative inline-flex">
      {mask === "1" ? (
        <div className="absolute left-0 w-full z-30 px-8">
          <h2 className="font-bold text-xl mb-4 text-outline">{data.number}</h2>
          <h3 className="text-xl leading-5">{data.title}</h3>
        </div>
      ) : (
        <div className={`absolute left-0 w-full z-30 px-12 ${mask === "2" && "-mt-14"}`}>
          <h3>{data.number}</h3>
          <h2 className="text-xl font-bold leading-5">{data.title}</h2>
          <h3>{data.subtitle}</h3>
        </div>
      )}

      <img src={`/mask/mask-${mask}.svg`} className="item-mask-main absolute z-20 w-full top-0" />
      <img src={`/mask/mask-${mask}-outline.svg`} className="item-mask-outline absolute z-10 w-full opacity-0 top-0" />
      <img src={data.image} className={`item-mask-image absolute top-0 h-full w-full object-cover mask mask-${mask} opacity-0`} />
    </Link>
  );
};

export default Item;
