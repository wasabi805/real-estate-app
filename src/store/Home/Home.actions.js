import { createActions } from 'redux-actions';

const homeActions = createActions(
    'FETCH_DUMMY_DATA',
    'UPDATE_DUMMY_DATA',
);

export default homeActions