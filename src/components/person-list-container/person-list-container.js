import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {withApiContext} from '../hoc';
import PersonList from '../person-list';
import {fetchData, selectPaginationPage} from '../../store/actions';
import Spinner from '../spinner';
import {getSortedAndFilteredItems} from '../../store/selectors';
import {personType} from '../../prop-types';
import ErrorIndicator from '../error-indicator/error-indicator';

class PersonListContainer extends Component {
  componentDidMount() {
    const {fetchDataAction} = this.props;
    fetchDataAction();
  }

  render() {
    const {
      data,
      isDataLoaded,
      error,
    } = this.props;

    if (!isDataLoaded) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
        <PersonList data={data} />
    );
  }
}

PersonListContainer.propTypes = {
  data: PropTypes.arrayOf(personType.isRequired).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  fetchDataAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {isDataLoaded, error} = state;
  return {
    data: getSortedAndFilteredItems(state),
    isDataLoaded,
    error,
  };
};

const mapDispatchToProps = (dispatch, {api}) => ({
  fetchDataAction: fetchData(api, dispatch),
  selectPaginationPageAction: (page) => dispatch(selectPaginationPage(page))
});


export default compose(
    withApiContext,
    connect(mapStateToProps,mapDispatchToProps)
)(PersonListContainer);
