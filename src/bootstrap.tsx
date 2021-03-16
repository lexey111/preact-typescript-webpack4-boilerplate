import {h, render} from 'preact';
import {App} from './app/app';

import './styles/app.less';

const rootElement = document.getElementById('app');
if (rootElement.hasChildNodes()) {
	render(<App/>, rootElement, rootElement.firstElementChild);
} else {
	render(<App/>, rootElement);
}
