import React, { useState } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const backendYolla = (e) => {
    e.preventDefault();
    //Fake Backend yaptigim icin ilk etapta elimle name ve pass belirledim
    localStorage.setItem("user", JSON.stringify(name));
    localStorage.setItem("userPassword", JSON.stringify(pass));
    navigate("/home");
  };
  return (
    <LoginContainer>
      <FormContainer onSubmit={backendYolla}>
        <StyledImg src={mealSvg} />

        <Header>{"<Dogukan>"} Recipe</Header>
        <StyledForm>
          <StyledInput
            placeholder="USERNAME"
            type="text"
            onChange={(e) => setName(e.target.value)}
          ></StyledInput>
          <StyledInput
            placeholder="PASSWORD"
            type="password"
            onChange={(e) => setPass(e.target.value)}
          ></StyledInput>
          <StyledButton type="submit">LOGIN</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
