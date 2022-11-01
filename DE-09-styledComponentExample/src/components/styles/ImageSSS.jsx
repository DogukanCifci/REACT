import styled from "styled-components";

const ImageSSS = styled.img`
  width: 350px;
  @media (max-width: 724px) {
    margin: 2rem 0;
  }
`;

// Istesek props yollayarak yukarda da bu altta ayri bir export acmadan yapabilirdim ama bir kac özelligi degistirecegimiz icin bunu tercih ettik
export const LogoSSS = styled(ImageSSS)`
  background-color: orange;
  width: 300px;
  padding: 2rem;
  @media (max-width: 724px) {
    margin: 2rem 0;
  }
`;

export default ImageSSS;
