import React from "react";

const Events = () => {
  //javacript alani
  let info = "MERHABA";
  let count = 0;
  const artir = () => {
    count += 1;
    document.querySelector("h2").textContent = count;
  };

  const azalt = () => {
    count -= 1;
    document.querySelector("h2").textContent = count;
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
    </div>
  );
};
export default Events;
