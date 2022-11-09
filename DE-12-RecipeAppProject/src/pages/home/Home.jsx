import React, { useState } from "react";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import Header from "../../components/header/Header";
import HomeSvg from "../../assets/home.svg";
import axios from "axios";
import RecipeCard from "./RecipeCard";
const Home = () => {
  //Degiskenlerin Tanimlandigi Kisim ////
  const [query, setQuery] = useState("");
  const [ogun, setOgun] = useState("breakfast");
  const [yemekler, setYemekler] = useState([]);
  //.-----------//

  //API KISMI
  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ogun}`;
  //API URL KEYCODE VS KISMI

  // =========== VERI CEKME KISMI ========
  const getData = async () => {
    if (query === "") {
      alert("Yemek ismi giriniz!");
      return;
    } else {
      const veri = await axios.get(url);
      setYemekler(veri.data.hits);
    }
  };
  console.log(yemekler);
  return (
    <div>
      <Header getData={getData} setQuery={setQuery} setOgun={setOgun} />
      {yemekler.length > 0 ? (
        <MainContainer>
          {yemekler.map((element, index) => (
            <RecipeCard key={index} element={element} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={HomeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
