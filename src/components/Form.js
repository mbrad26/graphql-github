import React from 'react';

const Form = ({ path, setPath, loadingData }) => {

  console.log('FILTER');

  // const [path, setPath] = useState('the-road-to-learn-react/the-road-to-learn-react');

  const handleSubmit = e => {
    e.preventDefault();
    loadingData(path);
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
