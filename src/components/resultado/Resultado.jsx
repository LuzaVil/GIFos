import React, { useContext } from "react";
import styles from "./Resultado.module.css";
import { Appcontext } from "../../context/Appcontext";

const Resultado = () => {
  const { gifs } = useContext(Appcontext);
  if (gifs.length === 0) return <h2>No gifs</h2>;
  return (
    <div className={styles.resultado}>
      {gifs.map((gif) => {
        return (
          <a href={gif.url} target="_blank">
            <img src={gif.images.downsized_medium.url} alt="" />
          </a>
        );
      })}
    </div>
  );
};

export default Resultado;
