import React from 'react';
import {AiFillWarning} from 'react-icons/ai';

const errorIndicatorStyle = {
  textAlign: 'center',
  fontSize: '20px',
};

const ErrorIndicator = () => (
    <div style={errorIndicatorStyle}>
      <AiFillWarning size={60} style={{color: 'red'}}/>
      <h2>Sorry, we had some technical problems. Please try later.</h2>
    </div>
);

export default ErrorIndicator;
