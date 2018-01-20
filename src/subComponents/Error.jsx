import React from 'react';
import './Error.css';
import PropTypes from 'prop-types';

const ErrorMessage = ({dirty, currentInput, suggestedCities}) => (
       <div className="errorMessage">
             {(dirty && (currentInput.length < 3)) ? <div>Valid search requires a minimum of three letters.</div> : null}
             { 
              currentInput.length >= 3 && suggestedCities.length === 0
               ? 
               <div>No Results</div> : null
             }
       </div>
  );

ErrorMessage.propTypes = {
  dirty: PropTypes.bool,
  currentInput: PropTypes.string,
  suggestedCities: PropTypes.array
}
export default ErrorMessage;
