import { useState } from "react";
import { FaReact } from "react-icons/fa";
const Mousekeyboard = () => {
  //https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX
  //!pageX ve pageY komutunu kullanırsanız, bulunduğunuz sayfanın sol üst köşesini 0-0 kabul eder, ona göre konum bildirir
  const [xEkseni, SetXekseni] = useState(0); //Degisikliklerin direk ekrana yansimasini istedigimiz icin bunu kullanmaliyiz
  const [yEkseni, SetYekseni] = useState(0);
  const mouseOlayi = (e) => {
    SetXekseni(e.pageX); //pageX ve pageY sabit e yi kendimiz verdik disardan bir parametre gelmesi lazim oldugu icin
    SetYekseni(e.pageY);
  };
  return (
    <div className="container text-center mt-4 d-flex flex-column align-items-center">
      <h1>************************************</h1>
      <h2>MOUSE EVENTS</h2>
      <p>X VE Y</p>
      <p className="text-danger fw-bold">
        {xEkseni} {yEkseni}
      </p>
      <div
        className="bg-success text-light w-50 p-5"
        id="coordinat"
        onMouseMove={mouseOlayi}
      >
        KOORDINATLAR <FaReact />
      </div>
    </div>
  );
};
export default Mousekeyboard;
