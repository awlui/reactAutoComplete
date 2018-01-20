import React from 'react';
import './List.css' ;
import PropTypes from 'prop-types';


const List = ({suggestedCities, currentInput, currentIndex, onListHover, displayList}) => (
  <div className="cityList">
    <ul>
    { displayList && currentInput.length >= 3 ? suggestedCities
      .map((city, i) => (<li onMouseMove={onListHover.bind(this, i)} className={Number.isInteger(currentIndex) && currentIndex === i ? 'activeCity' : null } key={i}><strong>{city.substr(0, currentInput.length)}</strong>{city.substr(currentInput.length)}</li>)) : null }
    </ul>
  </div>
  );

List.propTypes = {
  displayList: PropTypes.bool,
  currentInput: PropTypes.string,
  currentIndex: PropTypes.number,
  onListHover: PropTypes.func,
  suggestedCities: PropTypes.array
}

export default List;