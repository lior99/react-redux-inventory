import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider }  from 'react-redux';

import App from './src/App';
import Grid from './src/components/Grid';
import ItemsGrid from './src/components/ItemsGrid';
import AddItemToInventory from './src/components/AddItemToInventory';
import store, { history } from './src/store';

import style from './style.scss';


const router = (
		<Provider store={ store }>
			<Router history={ history }>
	      		<Route path="/" component={ App }>
	      			<IndexRoute component={ ItemsGrid }></IndexRoute>
					    <Route path="grid" component={ Grid }></Route>
		      	</Route>
			</Router>
		</Provider>
);

ReactDOM.render(router, document.querySelector('#root'));
