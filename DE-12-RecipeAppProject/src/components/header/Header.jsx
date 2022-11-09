import React from "react";
import {
  FormContainer,
  HeaderContainer,
  MainHeader,
  FoodInput,
  Button,
  Select,
} from "./HeaderStyles";

const Header = ({ getData, setOgun, setQuery }) => {
  const yapSubmit = (e) => {
    e.preventDefault();
    getData();
    // document.querySelector("#foodInput").value = "";
  };
  return (
    <div>
      <HeaderContainer>
        <MainHeader>FOOD</MainHeader>
        <FormContainer onSubmit={yapSubmit}>
          <FoodInput
            type="text"
            id="foodInput"
            onChange={(i) => setQuery(i.target.value)}
            placeholder="Search"
          />
          <Button type="submit">SEARCH</Button>
          <Select onChange={(i) => setOgun(i.target.value)}>
            <option value="brekfast">Breakfast</option>
            <option value="snack">Snack</option>
            <option value="lunch">Lunch</option>
            <option value="teatime">TeaTime</option>
          </Select>
        </FormContainer>
      </HeaderContainer>
    </div>
  );
};

export default Header;
