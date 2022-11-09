import React, { createContext, useEffect, useState } from "react";
import GosterUsers from "./pages/GosterUsers";
export const ContainerContext = createContext();

const App = () => {
  const url = "https://api.github.com/users";
  const [kullanici, setKullanici] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setKullanici(data));
  }, []);
  console.log(kullanici);
  const changeDivision = (id, yeniWidth) => {
    setKullanici(
      kullanici.map((element) =>
        element.id === id ? { ...element, width: yeniWidth } : element
      )
    );
  };

  return (
    <ContainerContext.Provider value={{ kullanici, changeDivision }}>
      <GosterUsers />
    </ContainerContext.Provider>
  );
};

export default App;
