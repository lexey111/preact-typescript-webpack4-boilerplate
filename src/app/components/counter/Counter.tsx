import { h } from 'preact';
import { useState } from 'preact/hooks';

const cameraPath = "/camera.svg";

function Counter() {
    const [value, setValue] = useState(0);

    /*
    Note: 
    Fragments are not supported with Typescript at the time... please make a PR when they become available
    <>
    </>
    */
  
    return (
      <div>
        <img src={cameraPath} width="200" />
        <p>
          This is the standard Preact counter component with hooks.
        </p>
        <div>Counter: {value}</div>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
      </div>
    )
  }

export default Counter;