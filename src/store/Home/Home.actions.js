import { createActions } from 'redux-actions';

const homeActions = createActions(
    'FETCH_DUMMY_DATA',
    'UPDATE_DUMMY_DATA',
    'ON_CHANGE_SEARCH_FIELD',
    'UPDATE_SEARCH_FIELD',
    'FETCH_SEARCH_RESULTS',
);

export default homeActions