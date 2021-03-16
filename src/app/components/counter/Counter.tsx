import {h, JSX} from 'preact';
import {useState} from 'preact/hooks';

const cameraPath = '/camera.svg';

export const Counter = (): JSX.Element => {
	const [value, setValue] = useState(0);

	return <div>
		<img src={cameraPath}/>
		<p>
			This is the standard Preact counter component with hooks.
		</p>
		<div className={'counter-value'}>Counter: {value}</div>
		<button onClick={() => setValue(value + 1)}>Increment</button>
		<button onClick={() => setValue(value - 1)}>Decrement</button>
	</div>;
};
