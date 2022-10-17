import React from "react";
import "./Card.scss";

//keyword olarak verdigim kelimeyi dalgali parantez icinde yazmaliyim. Eger direk liste halinde almak istiyorsam. Diger türlü props olarak da alabilirim ama fafrki console.log icinde yazdirarak görebilrisiniz.
const Mycard = ({ data1 }) => {
  console.log(data1);
  return (
    <div>
      <div className="container">
        {data1.map((e) => {
          const { id, name, job, comment, img } = e;
          return (
            <div key={id} className="cards">
              <h1>{name}</h1>
              <h2>{job}</h2>
              <p>{comment}</p>
              <img src={img} alt="" />

              <div className="btn-container">
                <button className="btn-container-small">Small</button>
                <button className="btn-container--large">Large</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Mycard;
