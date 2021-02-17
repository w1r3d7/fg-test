import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import {Button, ButtonGroup, Table} from 'react-bootstrap';
import {FaSortAmountDownAlt, FaSortAmountDown} from 'react-icons/fa';
import PersonItem from '../person-item';
import {personType} from '../../prop-types';
import {selectPerson, selectSortOption} from '../../store/actions';
import {TABLE_HEADERS} from '../../consts';

const emptyResult = () => {
  const emptyStringStyle = {
    textAlign: 'center'
  };

  return (
    <p style={emptyStringStyle}>nothing found, change your search</p>
  );
};

const PersonList = ({
  data,
  sortingOption,
  selectSortOptionAction,
  selectPersonAction,
}) => {
  const handleSortButtonClick = (sortType) => () => {
    if (sortType !== sortingOption) {
      selectSortOptionAction(sortType);
    }
  };

  const handlePersonClick = (id) => {
    selectPersonAction(id);
  };

  const createTheadRow = () => (
    <thead>
      <tr>
        {
          TABLE_HEADERS.map((header) => {
            const genName = header.toLowerCase().split(' ').join('-');
            const sortUp = `${genName}-up`;
            const sortDown = `${genName}-down`;
            return (
              <th key={uniqid()}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  {header}
                  <ButtonGroup>
                    <Button
                        name={sortUp}
                        onClick={handleSortButtonClick(sortUp)}
                        active={sortUp === sortingOption}
                        variant="outline-primary"
                        aria-label="sort items button">
                      <FaSortAmountDownAlt />
                    </Button>
                    <Button
                        active={sortDown === sortingOption}
                        name={sortDown}
                        onClick={handleSortButtonClick(sortDown)}
                        variant="outline-primary"
                        aria-label="sort items button">
                      <FaSortAmountDown />
                    </Button>
                  </ButtonGroup>
                </div>
              </th>
            );
          })
        }
      </tr>
    </thead>
  );

  const createTableRow = (item) => (
      <PersonItem item={item} key={uniqid()} onPersonClick={handlePersonClick} />
  );

  if (!data.length) {
    return emptyResult();
  }

  return (
    <Table striped bordered hover>
      {
        createTheadRow()
      }
      <tbody>
      {
        data.map((item) => (
              createTableRow(item)
          ))
      }
      </tbody>
    </Table>
  );
};

PersonList.propTypes = {
  data: PropTypes.arrayOf(personType.isRequired).isRequired,
  sortingOption: PropTypes.string.isRequired,
  selectSortOptionAction: PropTypes.func.isRequired,
  selectPersonAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({sortingOption}) => ({sortingOption});

const mapDispatchToProps = (dispatch) => ({
  selectSortOptionAction: (sortOption) => dispatch(selectSortOption(sortOption)),
  selectPersonAction: (id) => dispatch(selectPerson(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
