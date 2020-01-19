import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Default = () => {
  return (
    <Header title='404 Not Found' styleClass='default-hero'>
      <h2 className='text-light text-uppercase'>You are in the wrong place</h2>
      <Link to='/' className='text-uppercase btn btn-secondary btn-lg mt-3'>
        Retrun to home
      </Link>
    </Header>
  );
};

export default Default;
