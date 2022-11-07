import React from "react";
import { Button, Cards, RecipeHeader, RecipeImage } from "./HomeStyles";

const RecipeCard = ({ element }) => {
  const { label, image } = element.recipe;
  return (
    <Cards>
      <RecipeHeader>{label}</RecipeHeader>
      <RecipeImage src={image} alt="" />
      <Button>View Details</Button>
    </Cards>
  );
};

export default RecipeCard;
