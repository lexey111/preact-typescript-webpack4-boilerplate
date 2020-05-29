import { h } from 'preact';

function Nested() {

    return (
      <div>
        <p>A nested page</p>
        <a href="/">Home</a><br />
        <a href="/page">Parent page</a>
      </div>
    )
  }

export default Nested;
