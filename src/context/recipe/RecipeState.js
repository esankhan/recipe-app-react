import React, { useReducer } from "react";
import axios from "axios";
import RecipeReducer from "./recipeReducer";
import RecipeContext from "./recipeContext";

import {
  SET_RECIPES,
  SET_RECIPE,
  SET_SEARCH,
  REMOVE_SEARCH,
  SET_LOADING
} from "../Types";

const RecipeState = props => {
  const initialState = {
    recipes: [],
    recipe: {},
    search: "",
    loading: false
  };

  const apiKey = "879115cffc63e79080c15d8962398852";

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  const setRecipes = async url => {
    const data = await axios.get(url);
    dispatch({ type: SET_RECIPES, payload: data.data.recipes });
  };

  const onChangec = text => {
    dispatch({ type: SET_SEARCH, payload: text });
  };

  const onSubmitc = async url => {
    const data = await axios.get(url);
    dispatch({ type: SET_RECIPES, payload: data.data.recipes });
    dispatch({ type: REMOVE_SEARCH });
  };

  const setRecipe = async text => {
    dispatch({ type: SET_LOADING });
    const url = `https://www.food2fork.com/api/get?key=${apiKey}&rId=${text}`;

    const data = await axios.get(url);

    dispatch({ type: SET_RECIPE, payload: data.data.recipe });
    dispatch({ type: SET_LOADING });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        recipe: state.recipe,
        search: state.search,
        setRecipes,
        onChangec,
        onSubmitc,
        setRecipe,
        loading: state.loading
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
