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
import ErrorIndicator from '../error-indicator/error-indicator';

const MainPage = ({
  resultsOnPage,
  paginationPage,
  unCuttedData,
  selectPaginationPageAction,
  selectedPerson,
  setSearchStringAction,
  isDataLoaded,
  error
}) => {

  if (error) {
    return <ErrorIndicator />;
  }

  return (
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
};

MainPage.defaultProps = {
  selectedPerson: null,
};


MainPage.propTypes = {
  paginationPage: PropTypes.number.isRequired,
  resultsOnPage: PropTypes.number.isRequired,
  selectPaginationPageAction: PropTypes.func.isRequired,
  unCuttedData: PropTypes.arrayOf(personType.isRequired).isRequired,
  selectedPerson: PropTypes.number,
  setSearchStringAction: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {resultsOnPage, paginationPage, selectedPerson, isDataLoaded, error} = state;
  return {
    unCuttedData: getFilteredItems(state),
    resultsOnPage,
    paginationPage,
    selectedPerson,
    isDataLoaded,
    error
  };
};
const mapDispatchToProps = ({
  selectPaginationPageAction: selectPaginationPage,
  setSearchStringAction: setSearchString
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
