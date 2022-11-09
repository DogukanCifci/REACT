import React, { createContext, useState } from "react";
import data from "./data";

//Ogrenci objecti ve fonksiyon icin context olusturuyoruz ve disraidan alt componentlerin kullanimina aciyoruz.
export const OgrenciContext = createContext;

const App = () => {
  const [ogrenci, setOgrenci] = useState(data);

  console.table(ogrenci);

  const renkDegistir = () => {
    //dizideki renkleri degistirme fonksiyonunu burada yapacagiz.
  };

  return <div>App</div>;
};

export default App;
