import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';
import data from './all_items_data';

const defaultState  = {
	inventory : data.map(item => item)
}

const store = createStore(rootReducer
	, defaultState
	,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
