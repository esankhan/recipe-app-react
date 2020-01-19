import {
  SET_RECIPES,
  SET_SEARCH,
  REMOVE_SEARCH,
  SET_RECIPE,
  SET_LOADING
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };
    case SET_RECIPE: {
      return {
        ...state,
        recipe: action.payload
      };
    }

    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload
      };
    }

    case REMOVE_SEARCH: {
      return {
        ...state,
        search: ""
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: !state.loading
      };
    }
    default:
      return state;
  }
};
