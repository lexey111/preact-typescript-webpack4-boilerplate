import { Component } from 'preact';
import { router } from "./router";


export class App extends Component {
	render() {
		return router(location)
	}
}
