import React, { useState } from 'react';

const Form = () => {

  console.log('FILTER');

  const [path, setPath] = useState('the-road-to-learn-react/the-road-to-learn-react');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => setPath(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='url'>
        Show open issues for https://github.com/
      </label>
      <input
        id='url'
        type='text'
        value={path}
        onChange={handleChange}
      />
      <button
        type='submit'
      >
        Search
      </button>
    </form>
  );
};

export default Form;
