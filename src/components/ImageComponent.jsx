import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <>
      <div className="flex items-center justify-center h-full w-full">{isLoading ? <BeatLoader /> : <img src={src} alt={alt} className="fade-in h-full w-full object-cover" />}</div>
    </>
  );
};

export default ImageComponent;
