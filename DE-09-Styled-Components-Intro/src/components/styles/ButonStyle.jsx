import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${({ sinan }) => (sinan ? "blue" : "purple")};
  color: yellow;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border: 2px solid green;
  border-radius: 5px;
  font-family: "tahoma";
  &:hover {
    transform: scale(0.95);
  }
`;

export const DomatesButton = styled(ButtonStyle)`
  /* Home.jsx'ten component icinde dogukan ve sinan gibi istedigimiz bir kelimeyi sanki o dogukan = {true} gibi props yolladim. Ama true oldugu icin sadece kelimyei yazmamiz yeterli. Burada da onu check ettik ve eger o true ise yani varsa böyle olsun yoksa böyle olsun diye ternary yaptik. */

  color: ${({ dogukan }) => (dogukan ? "red" : "green")};
  background-color: aquamarine;
  border: 3px solid red;
`;

export default ButtonStyle;
