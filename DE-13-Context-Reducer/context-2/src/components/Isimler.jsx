import React, { useContext } from "react";
import { ContainerContext } from "../App";
import AnaUser from "./AnaUser";

const Isimler = () => {
  const { kullanici } = useContext(ContainerContext);

  return (
    <div>
      {
        //30 elemanli bir apiden hepsini almayip sadece ilk 4 elemani almak icin slice yöntemini kullandiktan sonra map ile bu 4 elemanin icinde geziyoruz.
        kullanici.slice(0, 4).map((e) => {
          return (
            <div key={e.id} style={{ backgroundColor: "pink" }}>
              {e.login}
            </div>
          );
        })
      }
      <AnaUser kullanici={kullanici} />
    </div>
  );
};

export default Isimler;
