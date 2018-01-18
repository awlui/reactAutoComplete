import React from 'react';

const Search = ({onSearchInput}) => (
  <form onSubmit={(event) => event.preventDefault() }>
    <input type="text" className="searchField" onChange={onSearchInput}/>
  </form>
  );

export default Search;