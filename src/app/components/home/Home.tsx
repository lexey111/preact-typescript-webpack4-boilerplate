import {Component, h, JSX} from 'preact';
import {Counter} from '../counter/Counter';

export interface HomeProps {
	title: string
}

interface HomeState {
	title: string
}

export class Home extends Component<HomeProps, HomeState> {
	public state = {
		title: 'local state'
	};

	constructor(props: HomeProps) {
		super(props);
		this.state.title += ' - ' + props.title;
	}

	componentDidMount(): void {
		setTimeout(() => {
			const {state} = this;

			state.title = 'Preact\'s [componentDidMount] worked as expected';
			this.setState(state);
		}, 2000);
	}

	render(props: HomeProps, state: HomeState): JSX.Element {
		return <div className={'home-page'}>
			<h1>{props.title}</h1>
			<p>
				{state.title}
			</p>
			<Counter/>
			<h2>Under the hood</h2>
			<ul>
				<li><a href='https://preactjs.com/'>Preact</a></li>
				<li><a href='https://www.typescriptlang.org/'>Typescript</a></li>
				<li><a href='https://webpack.js.org/'>Webpack 5</a></li>
				<li><a href='http://lesscss.org/'>LESS 4</a></li>
			</ul>
			<p>
				Initial idea - <a href='https://dominicstpierre.com/how-to-start-with-typescript-and-preact-a9ea3e0ba4dc'>
				Dominic St-Pierre [Medium]</a>. Thanks a lot!
			</p>
			<div>
				<h4>Other features</h4>
				<p>
					Link to pages:
					<ul>
						<li><a href='/page'>Page</a></li>
						<li><a href='/page/nested'>Nested page</a></li>
					</ul>
				</p>
			</div>
		</div>;
	}
}

export const DefaultHome = (): JSX.Element => <Home title='Preact boilerplate (v2)'/>;
