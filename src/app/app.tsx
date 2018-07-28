import {Component, h} from 'preact';

export interface AppProps {
	title: string;
}

interface AppState {
	title: string;
}

export class App extends Component<AppProps, AppState> {
	public state = {
		title: 'local state'
	};

	constructor(props: AppProps) {
		super(props);
		this.state.title += ' - ' + props.title;
	}

	componentDidMount() {
		setTimeout(() => {
			let state = this.state;

			state.title = `Preact's [componentDidMount] worked as expected`;
			this.setState(state);
		}, 2000);
	}

	render(props: AppProps, state: AppState) {
		return <div>
			<h1>{props.title}</h1>
			<p>
				{state.title}
			</p>
			<h2>Under the hood</h2>
			<ul>
				<li><a href="https://preactjs.com/">Preact</a></li>
				<li><a href="https://www.typescriptlang.org/">Typescript</a></li>
				<li><a href="https://webpack.js.org/">Webpack 4</a></li>
				<li><a href="http://lesscss.org/">LESS</a></li>
				<li><a href="https://github.com/necolas/normalize.css">NormalizeCSS</a></li>
			</ul>
			<p>
				Initial idea - <a href="https://dominicstpierre.com/how-to-start-with-typescript-and-preact-a9ea3e0ba4dc">Dominic St-Pierre [Medium]</a>. Thanks alot!
			</p>
		</div>
	}
}