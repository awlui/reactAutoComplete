import React from 'react';
import './List.css' ;

const List = ({cities, currentInput, dirty}) => (
  <div className="cityList">
    <h2>City List</h2>
    <ul>
    { currentInput.length >= 3 ? cities
      .filter((city) => {
        return city.startsWith(currentInput);
      })
      .map((city, i) => (<li key={i}>{city}</li>)) : null }
    </ul>
    { currentInput.length >= 3 && !cities.some((city) => {
      return city.startsWith(currentInput);
    }) ? <div className="errorMessage">No Results</div> : null}
  </div>
  );

export default List;