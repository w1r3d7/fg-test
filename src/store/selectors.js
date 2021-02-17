import {createSelector} from 'reselect';
import {SortType, START_PAGE} from '../consts';

const getPersonId = ({selectedPerson}) => selectedPerson;
const getData = ({data}) => data;
const getSortingOption = ({sortingOption}) => sortingOption;
const getResultsOnPage = ({resultsOnPage}) => resultsOnPage;
const getPaginationPage = ({paginationPage}) => paginationPage;
const getSearchString = ({searchString}) => searchString;

const getSortedItems = createSelector(
    [getData, getSortingOption],
    (data, sortingOption) => {
      const newData = [...data];
      switch (sortingOption) {
        case SortType.ID_DOWN:
          return newData.sort((a, b) => b.id - a.id);
        case SortType.ID_UP:
          return newData.sort((a, b) => a.id - b.id);
        case SortType.FIRST_NAME_UP:
          return newData.sort((a, b) => a.firstName.localeCompare(b.firstName));
        case SortType.FIRST_NAME_DOWN:
          return newData.sort((a, b) => b.firstName.localeCompare(a.firstName));
        case SortType.LAST_NAME_UP:
          return newData.sort((a, b) => a.lastName.localeCompare(b.lastName));
        case SortType.LAST_NAME_DOWN:
          return newData.sort((a, b) => b.lastName.localeCompare(a.lastName));
        case SortType.EMAIL_UP:
          return newData.sort((a, b) => a.email.localeCompare(b.email));
        case SortType.EMAIL_DOWN:
          return newData.sort((a, b) => b.email.localeCompare(a.email));
        case SortType.PHONE_UP:
          return newData.sort((a, b) => a.phone.localeCompare(b.phone));
        case SortType.PHONE_DOWN:
          return newData.sort((a, b) => b.phone.localeCompare(a.phone));
        default:
          return newData;
      }
    }
);

const getFilteredItems = createSelector(
    [getSortedItems, getSearchString],
    (items, searchString) => {
      if (searchString === null) {
        return items;
      }

      return items.filter((item) => {
        const newItem = {...item};
        delete newItem.address;
        delete newItem.description;

        return Object.values(newItem).some((value) => (
          String(value).toLowerCase().includes(searchString)
        ));
      });
  }
);

const getSortedAndFilteredItems = createSelector(
    [getFilteredItems, getResultsOnPage, getPaginationPage],
    (items, resultsOnPage, paginationPage) => {
      const from = (paginationPage - START_PAGE) * resultsOnPage;
      return items.slice(from, from + resultsOnPage);
    }
);

const getPerson = createSelector(
    [getPersonId, getData],
    (personId, data) => {
      const [person] = data.filter((item) => item.id === personId);
      return person;
    }
);


export {
  getSortedItems,
  getPerson,
  getSortedAndFilteredItems,
  getFilteredItems
};
