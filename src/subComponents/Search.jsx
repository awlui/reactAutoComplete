import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
const Search = ({onSearchInput, refCallback, onArrowPress, onFocusOut, currentInput, currentIndex, suggestedCities, onEnter}) => (
  <form onSubmit={(event) => event.preventDefault() }>
    <input ref={refCallback} type="text" value={Number.isInteger(currentIndex) ?  suggestedCities[currentIndex] : currentInput} className="searchField" onChange={onSearchInput} onKeyDown={onArrowPress} onBlur={onFocusOut}

    />
  </form>
  );

Search.propTypes = {
  suggestedCities: PropTypes.array,
  currentInput: PropTypes.string,
  onSearchInput: PropTypes.func,
  refCallback: PropTypes.func,
  onArrowPress: PropTypes.func,
  onFocusOut: PropTypes.func,
  currentIndex: PropTypes.number,
  onEnter: PropTypes.func
}
export default Search;