import { useState } from "react"; //useState kullanabilmem iicn bunu import etmem gerekiyor
const Hooks = () => {
  //setSayac yerine istedigimiz herhangi bir kelime yazabiliriz. Ama ilk kelimenin basina set getirilir bestpractise'de
  //usestate icinde yxazilan deger degiskenin ilk degeri anlaminda. Ayrica useState icine string ifade de yazilabilir

  //Bu const en üstte tanimlanmasi daha iyi Cünkü alttakilerin calismasinda sikinti olmamasi icin
  const [sayac, setSayac] = useState(0);

  const [infos, setInfos] = useState({
    isim: "Mevlut",
    email: "Mevlüt@gmail.com",
    age: 26,
  });

  const artir = () => {
    setSayac(sayac + 1);
    //Burda setSayac bizim ayakcimiuz. Istedigimiz degisikligi ayakcinin parantezi icinde orijinal degiskenle yapiyoruz. document.qeruy ile tekrar textContexti yakalamamiza gerek kalmiyor. Bu sekilde otomatik olarak güncelleniyor.
  };

  const azalt = () => {
    setSayac(sayac - 1);
  };

  const temizle = () => {
    setSayac(0);
  };

  const changing = () => {
    if (infos.isim === "Mevlut") {
      setInfos({
        isim: "Muhammed",
        email: "Muhammed@gmail.com",
        age: 29,
      });
    } else {
      setInfos({
        isim: "Mevlut",
        email: "Mevlüt@gmail.com",
        age: 26,
      });
    }
  };
  return (
    <div>
      <div className="container-fluid">
        <h2>*****************************************************</h2>
        <div className="container">
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

        <h1>*****************************************************</h1>

        <div className="text-center mt-5">
          <h2 className="mb-3 text-success">UseStatein Objectte Kullanimi</h2>
          <h5>{infos.isim}</h5>
          <h5>{infos.email}</h5>
          <h5>{infos.age}</h5>
          <button className="btn btn-success" onClick={changing}>
            DEGISTIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
