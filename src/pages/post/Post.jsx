import Header from "../../components/Header";
import { Link } from "react-router-dom";
import iconBack from "../../assets/images/back.svg";
import iconVideo from "../../assets/images/play.svg";
import iconForward from "../../assets/images/forward.svg";
import ImageComponent from "../../components/ImageComponent";
import { useEffect } from "react";

const Post = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="lg:flex gap-8">
        <section className="lg:w-1/5">
          <div className="lg:fixed lg:w-1/5 px-16 pt-48 pb-12">
            <div className="mb-4">
              <Link to="/" className="hover:opacity-60">
                <img src={iconBack} />
              </Link>
            </div>
            <div>
              <h2 className="font-bold text-3xl">
                espacios <span className="font-extraitalic">feos</span>
              </h2>
            </div>
            <div className="h-52 flex items-center">
              <a href="#" className="hover:opacity-60">
                <img src={iconVideo} />
              </a>
            </div>
            <div className="mb-10">
              <h2 className="font-bold text-3xl mb-4 text-outline">.05</h2>
              <h1 className="text-4xl leading-10">mono ambiente viajero</h1>
            </div>
            <div className="flex gap-4 items-start">
              <button className="border border-black rounded-full px-4 py-1 font-bold flex gap-2 items-center hover:opacity-60">
                <img src={iconBack} style={{ height: "16px" }} />
                Anterior
              </button>
              <button className="border border-black rounded-full px-4 py-1 font-bold flex gap-2 items-center hover:opacity-60 mb-2">
                Siguiente
                <img src={iconForward} style={{ height: "16px" }} />
              </button>
            </div>
          </div>
        </section>

        <section className="lg:w-4/5">
          <div className="aspect-video object-cover">
            <ImageComponent src="https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          </div>
          <div className="p-20">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorum ab ullam commodi quasi repellendus adipisci officiis, sint corrupti cum doloribus vitae itaque vero nostrum laudantium a sit ipsam ratione. <br /> Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Ducimus dolorum ab ullam commodi quasi repellendus adipisci officiis, sint corrupti cum doloribus vitae itaque vero nostrum laudantium a sit ipsam ratione.
            </p>
          </div>
          <div className="aspect-video object-cover">
            <ImageComponent src=" https://images.pexels.com/photos/4906284/pexels-photo-4906284.jpeg?auto=compress&cs=tinysrgb&w=16000" alt="" />
          </div>
          <div className="grid grid-cols-2">
            <div className="aspect-square object-cover">
              <ImageComponent src="https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="aspect-square object-cover">
              <ImageComponent src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
          </div>
          <div className="p-20">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorum ab ullam commodi quasi repellendus adipisci officiis, sint corrupti cum doloribus vitae itaque vero nostrum laudantium a sit ipsam ratione. <br /> Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Ducimus dolorum ab ullam commodi quasi repellendus adipisci officiis, sint corrupti cum doloribus vitae itaque vero nostrum laudantium a sit ipsam ratione.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="aspect-square object-cover">
              <ImageComponent src="https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="aspect-square object-cover">
              <ImageComponent src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
            <div className="aspect-square object-cover">
              <ImageComponent src="https://images.pexels.com/photos/3764958/pexels-photo-3764958.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="aspect-square object-cover">
              <ImageComponent src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Post;
