import React from "react";
import ContainerSSS from "./styles/ContainerSSS";
import data from "../data.js";
import ImageSSS from "./styles/ImageSSS";
import CardSSS from "./styles/CardSSS";
const Card = () => {
  return (
    <ContainerSSS>
      {data.map((item) => {
        const { id, title, body, image } = item;
        return (
          <CardSSS key={id} ters={id % 2 === 0 ? "row-reverse" : "row"}>
            <div>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
            <ImageSSS src={`./images/${image}`}></ImageSSS>
          </CardSSS>
        );
      })}
    </ContainerSSS>
  );
};

export default Card;
