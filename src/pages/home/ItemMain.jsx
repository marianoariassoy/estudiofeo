const Item = ({ data, mask }) => {
  return (
    <a href={data.url} className="scroll item-mask items-center justify-center relative inline-flex">
      <div className="absolute left-0 w-full z-30 px-8">
        <h3 className="text-xl text-center font-bold">{data.title}</h3>
      </div>

      <img src={`/assets/mask/mask-${mask}.svg`} className="item-mask-main absolute z-20 w-full top-0" />

      <img src={`/assets/mask/mask-${mask}-outline.svg`} className="item-mask-outline absolute z-10 w-full opacity-0 top-0" />
      <img src={data.image} className={`item-mask-image absolute top-0 h-full w-full object-cover mask mask-${mask} opacity-0`} />
    </a>
  );
};

export default Item;
