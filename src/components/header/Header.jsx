import React from "react";
import styles from "./Header.module.css";
import logo1 from "../../assets/images/logo-desktop.svg";
import logo2 from "../../assets/images/ilustra_header.svg";

const Header = ({ setDarkMode, darkMode }) => {
  //Funcion de eventos
  const manejarClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <h1>GIFos</h1>
      <div className={styles.header}>
        <img src={logo1} alt="" />
        <button
          value={darkMode}
          onClick={manejarClick}
          className={darkMode ? styles.botonDark : styles.botonLigth}
        >
          {darkMode ? "DARK MODE" : "LIGTH MODE"}
        </button>
      </div>
      <div className={styles.imagen}>
        <img src={logo2} alt="" />
      </div>
    </div>
  );
};

export default Header;
