import React, { Component } from 'react';
<<<<<<< HEAD
import CatComponent from './CatComponent.js'
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'
=======
import CatComponent from './CatComponent.js';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent.js';
import MouseComponent from './CatComponent.js';
>>>>>>> 9c03aa0c11452bddc78d2dad8104eb5c7d360570


class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
