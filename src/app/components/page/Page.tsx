import {h, JSX} from 'preact';

export const Page = (): JSX.Element => {
	return <div>
		<p>A page</p>
		<a href='/'>Home</a><br/>
		<a href='/page/nested'>A nested page</a>
	</div>;
};
