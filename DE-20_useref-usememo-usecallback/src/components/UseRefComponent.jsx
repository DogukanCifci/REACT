import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  //UseRef iki adet kullanimi var.

  //useRef Birinci Kullanimi
  const [sayac, setSayac] = useState(0);
  const sayacRef = useRef(0);

  console.log("Sayac : ", sayac);
  console.log("sayacRef : ", sayacRef.current); //sayacRef sonucu current diye bir objectin icine atar………AMA Burada eger setSayac kullanmasak konsolda degisiklikler gözükmez. Cünkü degisme, güncelleme oldugunda yukari cikacak bir durum yok.
  const artir = () => {
    setSayac(sayac + 1);

    sayacRef.current++; //useRef kullanirsak degisimleri js deki gibi yapariz.
  };

  //UseRef 2. kullanimi
  const divRef = useRef();
  const inputRef = useRef();
  console.log(divRef);
  const renkDegistir = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
  };
  //=========

  //React autoFocus yapmak yerine js kocu ile autofoucs yapmak istersem  useEffect kullanmaliyim ya da bir fonksiyon icinde yazmaliyim. Cünkü sayfa calisirken kod yukardan asagiya dogru gelecegi icin, useEffect olmadan inputRef.current.focus(); yazarsak daha input olusmadan focus olmaya calisir yani hata verir.
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //======

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component </h2>
      <input autoFocus ref={inputRef} type="text" placeholder="Enter text..." />
      <button onClick={renkDegistir}>ChangeBGColor</button>
      <button onClick={artir}>increase Value</button>
    </div>
  );
};

export default UseRefComponent;
