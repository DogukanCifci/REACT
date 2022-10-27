import React from "react";
import { Carousel } from "react-bootstrap";
import devops from "../img/devops.jpeg";
import about from "../img/about.jpeg";
import isa from "../img/isa.jpeg";

const Slider = () => {
  return (
    /*    fade bir sonraki resme soluk gelmesini saglar. interval bir sonraki seye eger otomatik gecis varsa kac saniye icinde gececegini gösterir. autoplay otomatik olarak resimler arasinda gecmeye yarar*/
    <div>
      <Carousel fade interval={5000} autoPlay={true}>
        <Carousel.Item>
          <img className="d-block w-100" src={devops} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={about} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={isa} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
