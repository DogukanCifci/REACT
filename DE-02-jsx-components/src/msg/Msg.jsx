//INternal css
import resim from "../images/background-image.jpg";

//External css
import "./Msg.css";

//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

const styleA = {
  color: "green",
  fontFamily: "Tahoma",
  border: "1px solid red",
};

const Msg = () => {
  return (
    <div>
      <h3 style={styleA}>Burasi MSG Alani </h3>
      <p style={{ color: "red" }}>React' a Hosgeldin</p>

      <img
        className="resim-msg"
        src="https://cdn.pixabay.com/photo/2022/08/15/09/14/koyasan-temple-7387445__340.jpg"
        alt=""
      />

      <img src={resim} alt="" className="resim-msg" />
    </div>
  );
};
export default Msg;
