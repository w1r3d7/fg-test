import React from 'react';
import PropTypes from 'prop-types';
import {Pagination as PaginationBootstap} from 'react-bootstrap';

import {personType} from '../../prop-types';

const paginationListStyle = {
  flexWrap: 'wrap'
};

const paginationItemStyle = {
  width: '5%',
  marginBottom: '1%'
};

const Pagination = ({data, resultsOnPage, paginationPage, onPaginationClick}) => {
  const handlePaginationItemClick = (page) => () => {
    if (paginationPage !== page) {
      onPaginationClick(page);
    }
  };

  const paginationList = () => {
    const paginationItems = Math.ceil(data.length / resultsOnPage);
    const newArray = new Array(paginationItems).fill('');

    if (newArray.length === 1) {
      return null;
    }

    return newArray.map((item, idx) => {
      const paginationIndex = idx + 1;
      return (
            <PaginationBootstap.Item
              style={paginationItemStyle}
              key={paginationIndex}
              onClick={handlePaginationItemClick(paginationIndex)}
              active={paginationPage === paginationIndex}>
            {paginationIndex}
            </PaginationBootstap.Item>
      );
    });
  };

  return (
    <PaginationBootstap style={paginationListStyle}>
      {paginationList()}
    </PaginationBootstap>
  );
};

Pagination.propTypes = {
  data: PropTypes.arrayOf(personType).isRequired,
  resultsOnPage: PropTypes.number.isRequired,
  paginationPage: PropTypes.number.isRequired,
  onPaginationClick: PropTypes.func.isRequired
};

export default Pagination;
