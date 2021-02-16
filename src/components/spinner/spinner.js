import React from 'react';
import {Spinner as Loader} from 'react-bootstrap';

const Spinner = () => {
  const spinnerStyle = {
    display: 'flex',
    minHeight: 300,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={spinnerStyle}>
      <Loader animation="border" role="status" variant="danger" >
        <span className="sr-only">Loading...</span>
      </Loader>
    </div>
  );
};

export default Spinner;
