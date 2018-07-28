import { h, render } from 'preact';
import { App } from './app/app';

import './styles/app.less';

render(<App title='Preact boilerplate' />, document.getElementById('app'));