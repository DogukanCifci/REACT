import React, { useContext } from "react";
import { OgrenciContext } from "../App";

const OgrenciItem = () => {
  const { ogrenci, renkDegistir } = useContext(OgrenciContext);
  //Yukarda import ettikten sonra useContext ile burda sanki props alir gibi aldik
  return (
    <div>
      {ogrenci.map((e) => {
        const { id, name, email, age, color } = e;
        return (
          <div style={{ backgroundColor: color }} key={id}>
            <h3> Name : {name}</h3>
            <h4>Email : {email}</h4>
            <h4>Age : {age}</h4>
            Color :
            <input
              type="text"
              name="color"
              value={color}
              onChange={(i) => renkDegistir(id, i.target.value)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OgrenciItem;
