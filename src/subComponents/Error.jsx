import React from 'react';
import './Error.css'
const ErrorMessage = ({dirty, currentInput, cities}) => (
       <div className="errorMessage">
             {(dirty && (currentInput.length < 3)) ? <div>Valid search requires a minimum of three letters.</div> : null}
             { 
              currentInput.length >= 3 
               &&
               !cities.some((city) => {
                 return city.startsWith(currentInput);
             }) 
               ? 
               <div>No Results</div> : null
             }
       </div>
  );

export default ErrorMessage;
