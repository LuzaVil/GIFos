import { createContext, useState } from "react";

const Appcontext = createContext();
const Appprovider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const values = {
    gifs,
    setGifs,
  };

  return <Appcontext.Provider value={values}>{children}</Appcontext.Provider>;
};

export { Appcontext, Appprovider };
