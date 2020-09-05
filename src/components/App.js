import React, { useEffect, useCallback } from 'react';

import './App.css'
import Form from './Form';
import { axiosGitHubGraphQL } from '../api/api';
import { GET_ORGANIZATION } from '../Queries/queries';

const TITLE = 'React GraphQL GitHub Client';

const App = () => {

  console.log('APP');

  const loadingData = useCallback(() => {
    axiosGitHubGraphQL
      .post('', { query: GET_ORGANIZATION })
      .then(res => console.log(res));
  }, []);

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  return (
    <div>
      <h1>{TITLE}</h1>
      <Form />
      <hr />
      {/* Here comes the result! */}
    </div>
  );
};


export default App;
