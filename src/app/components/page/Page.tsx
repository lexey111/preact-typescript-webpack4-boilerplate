import { h } from 'preact';

function Page() {

    return (
      <div>
        <p>A page</p>
        <a href="/">Home</a><br />
        <a href="/page/nested">A nested page</a>
      </div>
    )
  }

export default Page;
