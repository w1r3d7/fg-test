import React from 'react';
import PropTypes from 'prop-types';
import {personType} from '../../prop-types';

const PersonItem = ({item, onPersonClick}) => {
  const {id, firstName, lastName, email, phone} = item;

  const handlePersonClick = () => {
    onPersonClick(id);
  };

  return (
      <tr onClick={handlePersonClick}>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
  );
};

PersonItem.propTypes = {
  item: personType.isRequired,
  onPersonClick: PropTypes.func.isRequired,
};

export default PersonItem;
