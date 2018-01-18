import React from 'react';
import './List.css' ;

const List = ({cities, currentInput}) => (
  <div className="cityList">
    <ul>
    { currentInput.length >= 3 ? cities
      .filter((city) => {
        return city.startsWith(currentInput);
      })
      .map((city, i) => (<li key={i}><strong>{city.substr(0, currentInput.length)}</strong>{city.substr(currentInput.length)}</li>)) : null }
    </ul>
  </div>
  );

export default List;