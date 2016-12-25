import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import getGuid from './Utils/Utils';

class App extends Component {
	render() {
		return (
		     <div>
		     	<Header />
		     	{ this.props.children }
		     </div>
		);
	}
}

export default App;
