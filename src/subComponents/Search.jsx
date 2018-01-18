import React from 'react';
import './Search.css';
const Search = ({onSearchInput, refCallback}) => (
  <form onSubmit={(event) => event.preventDefault() }>
    <input ref={refCallback} type="text" className="searchField" onChange={onSearchInput}/>
  </form>
  );

export default Search;