import React from "react";
import { Button, Cards, RecipeHeader, RecipeImage } from "./HomeStyles";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ element }) => {
  const { label, image } = element.recipe;
  const navigate = useNavigate();
  return (
    <Cards>
      <RecipeHeader>{label}</RecipeHeader>
      <RecipeImage src={image} alt="" />
      <Button
        onClick={() => {
          navigate("/details", { state: { element } });
        }}
      >
        View Details
      </Button>
    </Cards>
  );
};

export default RecipeCard;
