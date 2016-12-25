import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider }  from 'react-redux';

import App from './App';
import Grid from './components/Grid';
import ItemsGrid from './components/ItemsGrid';
import AddItemToInventory from './components/AddItemToInventory';
import store, { history } from './store';

import style from './style/style.scss';

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
