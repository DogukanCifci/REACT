import styled from "styled-components";

const CardSSS = styled.div`
  background-color: aquamarine;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 2rem;
  padding: 60px;
  display: flex;
  flex-direction: ${({ ters }) => ters || "row"};

  @media (max-width: 726px) {
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export default CardSSS;
