import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

const Error = () => {
  return <div className="font-bold">¡Ups! debes completar este campo</div>;
};

const Form = () => {
  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSending(true);
    const sender = {
      to: "info@thk-avalos.com",
      from: "no-reply@thk-avalos.com",
      from_name: "Estudio Feo",
      subject: "Contacto",
    };

    axios
      .post("https://thk-avalos.com/backend/send-email.php", { ...data, ...sender })
      .then((data) => {
        if (data.data === "success") {
          setSended(true);
          setSending(false);
        } else {
          setError(true);
          setSending(false);
        }
      })
      .catch(() => {
        setError(true);
        setSended(false);
      });
  };

  const text = {
    es: {
      name: "NOMBRE Y APELLIDO",
      email: "CORREO ELECTRÓNICO",
      message: "MENSAJE",
      send: "ENVIAR",
      thanks: "¡Gracias por contactarte con nosotros!",
      error: "Se produjo un error al enviar el mensaje :-(",
    },
  };

  return (
    <>
      {error ? (
        <span className="text-2xl font-bold">{text["es"].error}</span>
      ) : sended ? (
        <span className="text-3xl font-bold">{text["es"].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input {...register("name", { required: true })} className="w-full h-11 p-3 text-black bg-transparent border-2 border-black" placeholder={text["es"].name} />
            {errors.name && <Error />}
          </div>
          <div className="mb-4">
            <input {...register("email", { required: true })} className="w-full h-11 p-3 text-black bg-transparent border-2 border-black" placeholder={text["es"].email} />
            {errors.email && <Error />}
          </div>
          <div className="mb-4">
            <textarea cols="30" rows="5" {...register("message", { required: true })} className="w-full p-3 text-black bg-transparent border-2 border-black" placeholder={text["es"].message} />
            {errors.message && <Error />}
          </div>
          <div>{sending ? <BeatLoader /> : <button className="bg-black w-full text-white h-11 font-bold btn">{text["es"].send}</button>}</div>
        </form>
      )}
    </>
  );
};

export default Form;
