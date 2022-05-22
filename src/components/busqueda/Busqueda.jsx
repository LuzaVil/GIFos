import React, { useEffect, useState, useContext } from "react";
import styles from "./Busqueda.module.css";
import logo3 from "../../assets/images/icon-search.svg";
import { Appcontext } from "../../context/Appcontext";
//import { useState } from 'react/cjs/react.development';

const Busqueda = () => {
  console.clear();
  //---------------------------Hoocks---------------------------
  const [gif, setGif] = useState("");
  const [mostrarAutocompletacion, setMostrarAutocompletacion] = useState(false);
  const [sugerencias, setSugerencias] = useState([]);
  const [gifSugerido, setGifSugerido] = useState("trending");
  const { setGifs } = useContext(Appcontext);

  useEffect(() => {
    if (gif.length > 2) {
      setMostrarAutocompletacion(true);
    } else {
      setMostrarAutocompletacion(false);
    }

    let url = fetch(
      "https://api.giphy.com/v1/gifs/search/tags" +
        "?" +
        "api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo" +
        "&" +
        "q=" +
        gif
    );
    url
      .then((res) => {
        return res.json();
      })
      .then((datos) => {
        // console.log(datos);
        datos.data.map((item) => {
          setSugerencias(datos.data);
          // console.log(item.name);
        });
      });
  }, [gif]);
  //---------------------------Segunda Url------------------------------
  useEffect(() => {
    let url2 = fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=nUNTIQy4xKKNgSXeNU5e11JARe54a9Lo&q=${gifSugerido}&limit=25&offset=0&rating=g&lang=en`
    );
    url2
      .then((res2) => {
        return res2.json();
      })
      .then((data2) => {
        setGifs(data2.data);
        // console.log(data2.data);
      });
  }, [gifSugerido]);

  //---------------------------Función evento---------------------------
  const manejoInput = (e) => {
    setGif(e.target.value);
    console.log(gif);
  };
  const manejoSugerencia = (e) => {
    setGifSugerido(e.target.innerText);
  };
  //---------------------------JavaScript---------------------------
  return (
    <div className={styles.busqueda}>
      <input
        type="text"
        value={gif}
        onChange={manejoInput}
        placeholder="busca un gif"
      />
      <button
        onClick={() => {
          console.log(gif);
          setGifSugerido(gif);
        }}
      >
        <img className={styles.lupa} src={logo3} alt="" />
      </button>
      {/* //---------------------------Autocompletación--------------------------- */}
      {mostrarAutocompletacion === true ? (
        <div className={styles.autocompletacion}>
          {sugerencias.map((sugerencia) => {
            return <p onClick={manejoSugerencia}>{sugerencia.name}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Busqueda;
