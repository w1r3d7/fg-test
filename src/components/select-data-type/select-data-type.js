import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'react-bootstrap';
import {DataTypeUrl} from '../../consts';
import {withApiContext} from '../hoc';
import {selectDataType} from '../../store/actions';


const SelectDataType = ({api, selectDataTypeAction}) => {
  const handleDataButtonClick = ({target : { name }}) => {
    const type = name.toUpperCase();
    api.setDataType(DataTypeUrl[type]);
    selectDataTypeAction();
  };

  const selectDataContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
      <div style={selectDataContainerStyle}>
        <h2>Please choose Data size</h2>
        <ButtonGroup>
          <Button onClick={handleDataButtonClick} name="small">Small Data</Button>
          <Button onClick={handleDataButtonClick} name="big">Big Data</Button>
        </ButtonGroup>
      </div>
  );
};

SelectDataType.propTypes = {
  api: PropTypes.shape({
    setDataType: PropTypes.func.isRequired
  }).isRequired,
  selectDataTypeAction: PropTypes.func.isRequired,
};


const mapDispatchToProps = {
  selectDataTypeAction: selectDataType
};

export default compose(
    withApiContext,
    connect(null, mapDispatchToProps)
)(SelectDataType)  ;
