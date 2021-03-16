import {Component, JSX} from 'preact';
import {router} from './router';

export class App extends Component {
	render(): JSX.Element {
		return router(location);
	}
}
