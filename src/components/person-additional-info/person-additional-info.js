import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Jumbotron} from 'react-bootstrap';

import {getPerson} from '../../store/selectors';
import {personType} from '../../prop-types';
import {resetPerson} from '../../store/actions';

const PersonAdditionalInfo = ({person, resetPersonAction}) => {
  const {firstName, lastName, description, address} = person;
  const {city, state, streetAddress, zip} = address;
  return (
    <Jumbotron>
      <h3>Chosen person: {`${firstName} ${lastName}`}</h3>
      <p>Description: {description}</p>
      <address>
        Address: {streetAddress} <br />
        City: {city} <br />
        State: {state} <br />
        Zip: {zip}
      </address>
      <Button
          onClick={resetPersonAction}
          type="button"
          variant="primary">Close</Button>
    </Jumbotron>
  );
};

PersonAdditionalInfo.propTypes = {
  person: personType.isRequired,
  resetPersonAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  person: getPerson(state)
});

const mapDispatchToProps = (dispatch) => ({
  resetPersonAction: () => dispatch(resetPerson())
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonAdditionalInfo);
