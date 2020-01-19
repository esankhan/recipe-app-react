import React, { useEffect, useContext } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import RecipeContext from "../context/recipe/recipeContext";

const Recipes = props => {
  const { setRecipes, search, onChangec, onSubmitc } = useContext(
    RecipeContext
  );
  const apiKey = "879115cffc63e79080c15d8962398852";
  const url = `https://www.food2fork.com/api/search?key=${apiKey}`;

  const onChange = e => {
    onChangec(e.target.value);
  };

  useEffect(() => {
    setRecipes(url);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    let newUrl = "";
    newUrl = `${url}&q=${search}`;
    onSubmitc(newUrl);
  };
  return (
    <div>
      <Search search={search} onChange={onChange} onSubmit={onSubmit} />
      <RecipeList></RecipeList>
    </div>
  );
};

export default Recipes;
