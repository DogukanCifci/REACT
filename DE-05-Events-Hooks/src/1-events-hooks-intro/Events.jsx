import React from "react";

const Events = () => {
  //javacript alani
  let info = "MERHABA";
  let count = 0;
  //Fonsiyonu jsx ten cagirirken parantezsiz cagiriyoruz dikkat et
  //Cünkü fonksiyonu görünce react'da basmadan direk oraya gidiyor
  //Eger direk gitmesini istemiyorsak fonksiyon önüne jsx'te ()=>temizle() sekliyle yazmamiz gerekiyor
  const artir = () => {
    count += 1;
    document.querySelector("h2").textContent = `COUNT : ${count}`;
  };

  const azalt = () => {
    count -= 1;
    document.querySelector("h2").textContent = `COUNT : ${count}`;
  };
  const temizle = (parameter) => {
    document.querySelector(".btn-info").textContent = parameter;
  };
  //returnden sonrasi (return ici) ;
  return (
    /* react jsx alani */
    <div className="container">
      <h1 className="text-center mt-1">INFO : {info}</h1>
      <h2>Count : {count}</h2>
      <button className="btn btn-primary" onClick={artir}>
        ARTTIR
      </button>
      <button className="btn btn-danger" onClick={azalt}>
        AZALT
      </button>
      <button
        className="btn btn-info"
        onClick={() => temizle("Buton Temizlendi")}
      >
        TEMIZLE
      </button>
    </div>
  );
};
export default Events;
