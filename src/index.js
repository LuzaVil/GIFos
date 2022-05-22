import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Appprovider } from "./context/Appcontext";

ReactDOM.render(
  <React.StrictMode>
    <Appprovider>
      <App />
    </Appprovider>
  </React.StrictMode>,
  document.getElementById("root")
);
