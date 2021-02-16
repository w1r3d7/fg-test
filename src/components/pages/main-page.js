import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Filter from '../filter';
import Pagination from '../pagination';
import PersonListContainer from '../person-list-container/person-list-container';
import {selectPaginationPage, setSearchString} from '../../store/actions';
import {personType} from '../../prop-types';
import PersonAdditionalInfo from '../person-additional-info';
import {getFilteredItems} from '../../store/selectors';
import FormAddNewPerson from '../form-add-new-person';



const MainPage = ({
  resultsOnPage,
  paginationPage,
  unCuttedData,
  selectPaginationPageAction,
  selectedPerson,
  setSearchStringAction,
  isDataLoaded
}) => (
    <>
      {
        isDataLoaded
          &&
          <>
            <Filter onFilterSearch={setSearchStringAction} />
            <FormAddNewPerson />
          </>

      }

      <PersonListContainer />
      <Pagination
          data={unCuttedData}
          resultsOnPage={resultsOnPage}
          paginationPage={paginationPage}
          onPaginationClick={selectPaginationPageAction}
      />
      {selectedPerson && <PersonAdditionalInfo />}
    </>
);

MainPage.propTypes = {
  paginationPage: PropTypes.number.isRequired,
  resultsOnPage: PropTypes.number.isRequired,
  selectPaginationPageAction: PropTypes.func.isRequired,
  unCuttedData: PropTypes.arrayOf(personType.isRequired).isRequired,
  selectedPerson: PropTypes.number.isRequired,
  setSearchStringAction: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {resultsOnPage, paginationPage, selectedPerson, isDataLoaded} = state;
  return {
    unCuttedData: getFilteredItems(state),
    resultsOnPage,
    paginationPage,
    selectedPerson,
    isDataLoaded
  };
};
const mapDispatchToProps = ({
  selectPaginationPageAction: selectPaginationPage,
  setSearchStringAction: setSearchString
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
