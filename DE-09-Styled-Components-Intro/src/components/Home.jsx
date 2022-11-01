import ButtonStyle, { DomatesButton } from "./styles/ButonStyle";
import ContainerStyle from "./styles/ContainerStyle";
import HeaderStyle from "./styles/HeaderStyle";

const Home = () => {
  return (
    <ContainerStyle>
      <h1>Hello</h1>
      <h3>Merhaba</h3>
      <HeaderStyle>Styled Component Dersine Hosgeldiniz</HeaderStyle>
      <ButtonStyle>Submit</ButtonStyle>
      <ButtonStyle>SUBMIT2</ButtonStyle>
      <DomatesButton dogukan>Yanci Buton</DomatesButton>
      <DomatesButton>Yanci Buton</DomatesButton>
    </ContainerStyle>
  );
};

export default Home;
