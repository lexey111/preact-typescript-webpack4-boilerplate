import {Component, h} from 'preact';
import Counter from "../counter/Counter";

export interface HomeProps {
	title: string;
}

interface HomeState {
	title: string;
}

export class Home extends Component<HomeProps, HomeState> {
	public state = {
		title: 'local state'
	};

	constructor(props: HomeProps) {
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

	render(props: HomeProps, state: HomeState) {
		return <div>
			<h1>{props.title}</h1>
			<p>
				{state.title}
			</p>
			<Counter />
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
			<div>
				<h4>Other feaatures</h4>
				<p>
					Link to pages: <a href="/page">page</a> <a href="/page/nested">nested page</a>
				</p>
			</div>
		</div>
	}
}

export const DefaultHome = () => <Home title='Preact boilerplate' />
