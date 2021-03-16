import {Component, h, JSX} from 'preact';

export class NotFound extends Component {
	render(): JSX.Element {
		document.title = '404: ' + location.pathname;

		return <div>
			<h3>Sorry we could not find: {location.pathname}</h3>
			<a href='/'>Back to main page</a>
		</div>;
	}
}
