import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import inventory from './inventory';

const rootReducer = combineReducers({ inventory, routing : routerReducer});

export default rootReducer;