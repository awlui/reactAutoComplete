import React from 'react';
import './Error.css'
const ErrorMessage = ({dirty, currentInput}) => (
        <div className="errorMessage">
               <div className={(dirty && (currentInput.length < 3)) ? 'errorActive' : 'errorInActive'}>Valid search requries three letters.</div>
        </div>
  );

export default ErrorMessage;
