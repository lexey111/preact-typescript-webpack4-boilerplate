import {h, JSX} from 'preact';

export const Nested = (): JSX.Element => {
	return <div>
		<p>A nested page</p>
		<a href='/'>Home</a><br/>
		<a href='/page'>Parent page</a>
	</div>;
};
