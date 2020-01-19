import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../context/recipe/recipeContext";
const Recipe = props => {
  const recipeContext = useContext(RecipeContext);

  const { recipe, setRecipe, loading } = recipeContext;

  const id = props.match.params.id;

  const {
    image_url,
    publisher,
    publisher_url,
    source_url,
    title,
    ingredients
  } = recipe;

  console.log(recipe.length);

  useEffect(() => {
    setRecipe(id);
  }, []);

  if (loading) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <h2 className='text-uppercase text-orange text-center'>
              loading Recipe
            </h2>
          </div>
        </div>
      </div>
    );
  }

  if (Object.keys(recipe).length > 0) {
    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Link to='/recipes' className='btn btn-warning mb-5 text-captalize'>
              {" "}
              Back to recipe list
            </Link>
            <img
              src={image_url}
              className='d-block w-100'
              style={{ maxHeight: "30rem" }}
              alt='recipe'
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <h6 className='text-uppercase'>{title}</h6>
            <h6 className='text-warning text-capitalize text-slanted'>
              provided by {publisher}
            </h6>
            <a
              href={publisher_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mt-2 text-capitalize'
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mt-2 mx-3 text-capitalize'
            >
              recipe url
            </a>
            <ul className='list-group mt-2'>
              <h2 className='mt-3 mb-4'>Ingredients</h2>
              {ingredients.map((ingredient, index) => {
                return (
                  <li key={index} className='list-group-item text-slanted'>
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  console.log(recipe);

  return <div></div>;
};

export default Recipe;
