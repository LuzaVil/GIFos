import { useState } from "react";
import Busqueda from "./components/busqueda/Busqueda";
import Header from "./components/header/Header";
import Resultado from "./components/resultado/Resultado";
import "./App.css";
//import styles from "./App.module.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`App ${!darkMode ? "AppDark" : "AppLigth"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Busqueda />
      <Resultado />
    </div>
  );
}

export default App;
