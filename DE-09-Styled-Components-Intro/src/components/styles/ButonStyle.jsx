import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: blue;
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
  color: green;
  background-color: aquamarine;
  border: 3px solid red;
`;

export default ButtonStyle;
