import {RESULTS_ON_PAGE, SortType, START_PAGE} from '../consts';

const initialState = {
  isDataTypeSelected: false,
  data: [],
  isDataLoaded: false,
  error: false,
  dataType: false,
  sortingOption: SortType.ID_UP,
  resultsOnPage: RESULTS_ON_PAGE,
  paginationPage: START_PAGE,
  selectedPerson: null,
  searchString: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DATA_TYPE':
      return {
        ...state,
        dataType: true,
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isDataLoaded: true,
      };
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isDataLoaded: false,
        error: false,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        isDataLoaded: true,
        error: action.payload,
      };
    case 'SELECT_SORT_OPTION':
      return {
        ...state,
        sortingOption: action.payload
      };
    case 'SELECT_PERSON':
      return {
        ...state,
        selectedPerson: action.payload
      };
    case 'SELECT_PAGINATION_PAGE':
      return {
        ...state,
        paginationPage: action.payload
      };
    case 'RESET_PERSON':
      return {
        ...state,
        selectedPerson: null,
      };
    case 'SET_SEARCH_STRING':
      return {
        ...state,
        searchString: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
