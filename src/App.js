import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Default from "./pages/Default";
import NavBar from "./components/Navbar";
import RecipeState from "./context/recipe/RecipeState";

const App = () => {
  return (
    <RecipeState>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/recipes' exact component={Recipes} />
            <Route path='/recipes/:id' exact component={Recipe} />
            <Route component={Default} />
          </Switch>
        </Fragment>
      </Router>
    </RecipeState>
  );
};

export default App;
