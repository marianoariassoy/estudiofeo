import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useDataContext } from "../../context/lanContext";
import Header from "../../components/Header";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import TextHTML from "../../hooks/useHTML";
import Modal from "../../components/Modal";
import iconBack from "../../assets/images/back.svg";
import iconVideo from "../../assets/images/play.svg";
import iconForward from "../../assets/images/forward.svg";
import ImageComponent from "../../components/ImageComponent";

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
      <Helmet>
        <title>FEO &bull; {data[0].title}</title>
        <meta name="description" content={data[0].text} />
        <meta property="og:title" content={data[0].title} />
        <meta property="og:url" content={`https://estudiofeo.com/post/${data[0].id}`} />
        <meta property="og:image" content={`https://estudiofeo.com/backend/images/${data[0].image}`} />
        <meta property="og:image:alt" content="Estudio Feo" />
      </Helmet>

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
            <div>
              <div className="aspect-video object-cover">
                <ImageComponent src={dataImages[0].image} alt={data[0].title} />
              </div>
              {dataImages[0].text && (
                <div className="px-20 pt-10">
                  <TextHTML text={lan === "es" ? dataImages[0].text : dataImages[0].text_eng} />
                </div>
              )}
            </div>
          )}

          {data[0].text && (
            <div className="p-20">
              <TextHTML text={data[0].text} />
            </div>
          )}

          {dataImages[1] && (
            <div>
              <div className="aspect-video object-cover">
                <ImageComponent src={dataImages[1].image} alt={data[0].title} />
              </div>
              {dataImages[1].text && (
                <div className="px-20 py-20">
                  <TextHTML text={lan === "es" ? dataImages[1].text : dataImages[1].text_eng} />
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-2">
            {dataImages[2] && (
              <div>
                <div className="aspect-square object-cover">
                  <ImageComponent src={dataImages[2].image} alt={data[0].title} />
                </div>
                {dataImages[2].text && (
                  <div className="px-20 py-10">
                    <TextHTML text={lan === "es" ? dataImages[2].text : dataImages[2].text_eng} />
                  </div>
                )}
              </div>
            )}
            {dataImages[3] && (
              <div>
                <div className="aspect-square object-cover">
                  <ImageComponent src={dataImages[3].image} alt={data[0].title} />
                </div>
                {dataImages[3].text && (
                  <div className="px-20 py-10">
                    <TextHTML text={lan === "es" ? dataImages[3].text : dataImages[3].text_eng} />
                  </div>
                )}
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
              <div>
                <div className="aspect-square object-cover">
                  <ImageComponent src={dataImages[4].image} alt={data[0].title} />
                </div>
                {dataImages[4].text && (
                  <div className="px-20 py-10">
                    <TextHTML text={lan === "es" ? dataImages[4].text : dataImages[4].text_eng} />
                  </div>
                )}
              </div>
            )}
            {dataImages[5] && (
              <div>
                <div className="aspect-square object-cover">
                  <ImageComponent src={dataImages[5].image} alt={data[0].title} />
                </div>
                {dataImages[5].text && (
                  <div className="px-20 py-10">
                    <TextHTML text={lan === "es" ? dataImages[5].text : dataImages[5].text_eng} />
                  </div>
                )}
              </div>
            )}
            {dataImages[6] && (
              <div>
                <div className="aspect-square object-cover">
                  <ImageComponent src={dataImages[6].image} alt={data[0].title} />
                </div>
                {dataImages[6].text && (
                  <div className="px-20 py-10">
                    <TextHTML text={lan === "es" ? dataImages[6].text : dataImages[6].text_eng} />
                  </div>
                )}
              </div>
            )}
            {dataImages[7] && (
              <div>
                <div className="aspect-square object-cover">
                  <ImageComponent src={dataImages[7].image} alt={data[0].title} />
                </div>
                {dataImages[7].text && (
                  <div className="px-20 py-10">
                    <TextHTML text={lan === "es" ? dataImages[7].text : dataImages[7].text_eng} />
                  </div>
                )}
              </div>
            )}
          </div>

          {data[0].text3 && (
            <div className="p-20">
              <TextHTML text={data[0].text3} />
            </div>
          )}

          <div className="grid grid-cols-2">
            {dataImages.map((item, index) => {
              if (index > 7) {
                return (
                  <div key={index}>
                    <div className="aspect-square object-cover">
                      <ImageComponent src={item.image} alt={data[0].title} />
                    </div>
                    {item.text && (
                      <div className="px-20 py-10">
                        <TextHTML text={lan === "es" ? item.text : item.text_eng} />
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </section>
      </main>

      {currentVideo && <Modal currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />}
    </>
  );
};

export default Post;
