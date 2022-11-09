import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";

//Ogrenci objecti ve fonksiyon icin context olusturuyoruz ve disraidan alt componentlerin kullanimina aciyoruz.
export const OgrenciContext = createContext();

const App = () => {
  const [ogrenci, setOgrenci] = useState(data);

  console.table(ogrenci);

  const renkDegistir = (id, myNewColor) => {
    setOgrenci(
      ogrenci.map((element) =>
        element.id === id ? { ...element, color: myNewColor } : element
      )
    );
  };

  return (
    <OgrenciContext.Provider value={{ ogrenci, renkDegistir }}>
      <Home />
    </OgrenciContext.Provider>
  );
};

export default App;
