import React from 'react';

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
  </div>
  );

export default List;