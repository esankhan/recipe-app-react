import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div>
      {" "}
      <Header title='Amazing Recipes'>
        <Link
          to='/recipes'
          className='text-uppercase btn btn-secondary btn-lg mt-3'
        >
          search recipes
        </Link>
      </Header>
      <footer className='footer text-center bg-light mt-auto py-3'>
        <div className='container'>
          <span className='text-muted '>
            &copy;<strong>esankhan3@gmail.com</strong>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
