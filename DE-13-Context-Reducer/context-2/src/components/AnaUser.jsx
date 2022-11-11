import React, { useContext } from "react";
import { ContainerContext } from "../App";

//Normalde kullaniciyi da dededen alabilirdim ama baba da bunu kullandigim icin göstermek adina hem props olarak hem de dededen de useContext kullanarak almis olduk.
const AnaUser = ({ kullanici }) => {
  const { changeDivision } = useContext(ContainerContext);
  return (
    <div>
      {kullanici.map((element) => {
        return (
          <div key={element.id}>
            <h3>{element.login}</h3>
            <img src={element.avatar_url} alt="" width={element.width} />
            <div>
              <label htmlFor={element.id}>Width : </label>
              <input
                type="text"
                id={element.id}
                onChange={(e) => changeDivision(element.id, e.target.value)}
                //element.id göndermemin sebebi Parenttaki fonksiyonda tiklanan elemani bulmak adina id ile eslestirmek icin
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnaUser;
