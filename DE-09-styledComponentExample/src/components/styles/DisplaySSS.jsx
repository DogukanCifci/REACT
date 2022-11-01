import styled from "styled-components";

const DisplaySSS = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (max-width: 724px) {
    flex-direction: column;
  }
`;

export default DisplaySSS;
