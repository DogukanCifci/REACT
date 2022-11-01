import React from "react";
import ButonSSS from "./styles/ButonSSS";
import ContainerSSS from "./styles/ContainerSSS";
import DisplaySSS from "./styles/DisplaySSS";
import ImageSSS, { LogoSSS } from "./styles/ImageSSS";

const Header = () => {
  return (
    <ContainerSSS>
      <DisplaySSS>
        <LogoSSS src="./images/logo.png"></LogoSSS>
        <div>
          <ButonSSS colorButton="#A62440">Apply Courses</ButonSSS>
          <ButonSSS bgColorDogu="#A62440">Talk to Adviser</ButonSSS>
        </div>
      </DisplaySSS>
      <hr />
      <DisplaySSS>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <ButonSSS bgColorDogu="#A62440">Start Your New Carrier</ButonSSS>
        </div>

        <div>
          <ImageSSS src="./images/hero.jpg"></ImageSSS>
        </div>
      </DisplaySSS>
    </ContainerSSS>
  );
};

export default Header;
