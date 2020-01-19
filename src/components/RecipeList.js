import React, { useContext } from "react";
import Recipe from "./Recipe";
import RecipeContext from "../context/recipe/recipeContext";

const RecipeList = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;

  return (
    <div className='container py-5'>
      {/* {title} */}
      <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
        <h1 className='text-slanted'>recipe list</h1>
      </div>
      {/*End of title*/}

      <div className='row'>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
