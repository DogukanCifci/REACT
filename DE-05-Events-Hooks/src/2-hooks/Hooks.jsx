import { useState } from "react"; //useState kullanabilmem iicn bunu import etmem gerekiyor
const Hooks = () => {
  //setSayac yerine istedigimiz herhangi bir kelime yazabiliriz. Ama ilk kelimenin basina set getirilir bestpractise'de
  //usestate icinde yxazilan deger degiskenin ilk degeri anlaminda. Ayrica useState icine string ifade de yazilabilir

  const [sayac, setSayac] = useState(0);
  const artir = () => {
    setSayac(sayac + 1);
    //Burda setSayac bizim ayakcimiuz. Istedigimiz degisikligi ayakcinin parantezi icinde orijinal degiskenle yapiyoruz. document.qeruy ile tekrar textContexti yakalamamiza gerek kalmiyor. Bu sekilde otomatik olarak güncelleniyor.
  };

  const azalt = () => {};

  const temizle = () => {};
  return (
    <div>
      <div className="container">
        <h2> **********************************************************</h2>

        <h1>USESTATE</h1>
        <h2>COUNT : {sayac}</h2>
        <button onClick={artir} className="btn btn-primary">
          ARTIR
        </button>
        <button onClick={azalt} className="btn btn-danger">
          AZALT
        </button>
        <button className="btn btn-warning" onClick={temizle}>
          TEMIZLE
        </button>
      </div>
    </div>
  );
};

export default Hooks;
