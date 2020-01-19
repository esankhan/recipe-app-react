import React from "react";

const Search = props => {
  const { search, onChange, onSubmit } = props;

  return (
    <div className='container'>
      <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
        <h1 className='text-slanted text-capitalize'>
          search recipes with <strong className='text-orange'>Food2Fork</strong>
        </h1>
        <form className='mt-4'>
          <label htmlFor='search' className='text-capitalize'>
            Types recipes seperated by comma
          </label>
          <div className='input-group'>
            <input
              type='text'
              name='search'
              className='form-control'
              placeholder='Cheese,carrots,onion'
              value={search}
              onChange={onChange}
            />
            <div className='input-group-append'>
              <button
                type='submit'
                className='input-group-text bg-primary
              text-white'
                onClick={onSubmit}
              >
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;