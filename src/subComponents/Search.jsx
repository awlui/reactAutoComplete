import React from 'react';

const Search = ({onSearchInput}) => (
  <form>
    <input type="text" className="searchField" onChange={onSearchInput} />
  </form>
  );

export default Search;