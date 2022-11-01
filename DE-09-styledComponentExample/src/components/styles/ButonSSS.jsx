import styled from "styled-components";

const ButonSSS = styled.button`
  border: 1px solid #a62440;
  border-radius: 5px;
  background-color: ${({ bgColorDogu }) => bgColorDogu || "white"};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  color: ${({ colorButton }) => colorButton || "black"};
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default ButonSSS;
