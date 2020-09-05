import React from 'react';

const TITLE = 'React GraphQL GitHub Client';

const App = () => {

  const handleSubmit = () => null;
  const handleChange = () => null;

  return (
    <div>
      <h1>{TITLE}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='url'>
          Show open issues for https://github.com/
        </label>
        <input
          id='url'
          type='text'
          onChange={handleChange}
        />
      </form>
    </div>
  );
};


export default App;
