const dataLoaded = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data
});

const dataRequested = () => ({
  type: 'FETCH_DATA_REQUEST',
});

const dataError = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

const selectPerson = (id) => ({
  type: 'SELECT_PERSON',
  payload: id
});

const selectDataType = () => ({
  type: 'SELECT_DATA_TYPE'
});

const selectSortOption = (sortOption) => ({
  type: 'SELECT_SORT_OPTION',
  payload: sortOption,
});

const selectPaginationPage = (page) => ({
  type: 'SELECT_PAGINATION_PAGE',
  payload: page
});

const resetPerson = () => ({
  type: 'RESET_PERSON'
});

const setSearchString = (string = null) => ({
  type: 'SET_SEARCH_STRING',
  payload: string
});

const setNewPerson = (person) => ({
  type: 'SET_NEW_PERSON',
  payload: person,
});

const fetchData = (api, dispatch) => () => {
  dispatch(dataRequested());
  api
      .getData()
      .then((data) => {
        dispatch(dataLoaded(data));
      })
      .catch((error) => dispatch(dataError(error)));
};


export {
  fetchData,
  selectDataType,
  selectSortOption,
  selectPerson,
  selectPaginationPage,
  resetPerson,
  setSearchString,
  setNewPerson
};
