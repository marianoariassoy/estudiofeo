import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDataContext } from "../../context/lanContext";

import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import TextHTML from "../../hooks/useHTML";

import iconBack from "../../assets/images/back.svg";
import iconVideo from "../../assets/images/play.svg";
import iconForward from "../../assets/images/forward.svg";
import ImageComponent from "../../components/ImageComponent";
import Modal from "../../components/Modal";

const Post = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();
  const { lan } = useDataContext();
  const { data, loading, error } = useFetch(`/post/${lan}/${id}`);
  const { data: dataImages, loading: loadingImages } = useFetch(`/imagenes/${id}`);
  const [currentVideo, setCurrentVideo] = useState(null);

  if (loading)
    return (
      <div className="h-screen w-screen">
        <Loader />
      </div>
    );

  if (loadingImages)
    return (
      <div className="h-screen w-screen">
        <Loader />
      </div>
    );

  return (
    <>
      <Header />
      <main className="lg:flex">
        <section className="lg:fixed post-col-left px-16 pt-48 pb-12 relative z-30 bg-white">
          <div>
            <div className="mb-4">
              <Link to="/" className="hover:opacity-60">
                <img src={iconBack} />
              </Link>
            </div>

            <div className="grid grid-cols-2 justify-between items-center lg:grid-cols-1">
              <div className="mb-8">
                <h2 className="font-bold text-3xl">
                  {data[0].section_name} <span className="font-extraitalic">{data[0].section_name_2} </span>
                </h2>
              </div>

              {data[0].video && (
                <div className="justify-end flex items-center lg:mb-8 lg:justify-start">
                  <button className="hover:opacity-60 open-video" onClick={() => setCurrentVideo(data[0].video)}>
                    <img src={iconVideo} />
                  </button>
                </div>
              )}
            </div>

            <div className="mb-10">
              {data[0].number && <h2 className="font-bold text-3xl mb-4 text-outline">{data[0].number}</h2>}
              {data[0].subtitle && <h2 className="text-2xl">{data[0].subtitle}</h2>}
              <h1 className="text-4xl font-bold leading-10">{data[0].title}</h1>
            </div>

            {data[0].link && (
              <div className="mb-4">
                <a href={data[0].link} target="_blank" rel="noreferrer" className="border border-black rounded-full px-4 py-1 font-bold inline-flex  gap-2 items-center hover:opacity-60 mb-2">
                  {lan === "es" ? "Ir al link" : "View Link"}
                </a>
              </div>
            )}

            <div>
              {data[0].prev && (
                <Link to={`/post/${data[0].prev}`} className="border border-black rounded-full px-4 py-1 font-bold inline-flex gap-2 items-center hover:opacity-60 mb-4 ">
                  <img src={iconBack} style={{ height: "16px" }} />
                  {lan === "es" ? "Anterior" : "Previous"}
                </Link>
              )}
              {data[0].next && (
                <Link to={`/post/${data[0].next}`} className="border border-black rounded-full px-4 py-1 font-bold inline-flex gap-2 items-center hover:opacity-60 mb-2">
                  {lan === "es" ? "Siguiente" : "Next"}
                  <img src={iconForward} style={{ height: "16px" }} />
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="lg:absolute right-0 post-col-right">
          {dataImages[0] && (
            <div className="aspect-video object-cover">
              <ImageComponent src={dataImages[0].image} alt={data[0].title} />
            </div>
          )}

          {data[0].text && (
            <div className="p-20">
              <TextHTML text={data[0].text} />
            </div>
          )}

          {dataImages[1] && (
            <div className="aspect-video object-cover">
              <ImageComponent src={dataImages[1].image} alt={data[0].title} />
            </div>
          )}

          <div className="grid grid-cols-2">
            {dataImages[2] && (
              <div className="aspect-square object-cover">
                <ImageComponent src={dataImages[2].image} alt={data[0].title} />
              </div>
            )}
            {dataImages[3] && (
              <div className="aspect-square object-cover">
                <ImageComponent src={dataImages[3].image} alt={data[0].title} />
              </div>
            )}
          </div>

          {data[0].text2 && (
            <div className="p-20">
              <TextHTML text={data[0].text2} />
            </div>
          )}

          <div className="grid grid-cols-2">
            {dataImages[4] && (
              <div className="aspect-square object-cover">
                <ImageComponent src={dataImages[4].image} alt={data[0].title} />
              </div>
            )}
            {dataImages[5] && (
              <div className="aspect-square object-cover">
                <ImageComponent src={dataImages[5].image} alt={data[0].title} />
              </div>
            )}
            {dataImages[6] && (
              <div className="aspect-square object-cover">
                <ImageComponent src={dataImages[6].image} alt={data[0].title} />
              </div>
            )}
            {dataImages[7] && (
              <div className="aspect-square object-cover">
                <ImageComponent src={dataImages[7].image} alt={data[0].title} />
              </div>
            )}
          </div>

          {data[0].text3 && (
            <div className="p-20">
              <TextHTML text={data[0].text3} />
            </div>
          )}
        </section>
      </main>

      {currentVideo && <Modal currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />}
    </>
  );
};

export default Post;
