import React, { useState, useEffect, useCallback } from 'react';

import './App.css'
import Form from './Form';
import Organization from './Organization';
import { axiosGitHubGraphQL } from '../api/api';
import {
  GET_ISSUES_OF_REPOSITORY,
 } from '../Queries/queries';

const TITLE = 'React GraphQL GitHub Client';

const App = () => {

  console.log('APP');

  const [organization, setOrganization] = useState();
  const [errors, setErrors] = useState();

  const loadingData = useCallback(() => {
    axiosGitHubGraphQL
      .post('', { query: GET_ISSUES_OF_REPOSITORY })
      .then(res => {
        console.log(res);
        setOrganization(res.data.data.organization);
        setErrors(res.data.errors);
      });
  }, []);

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  return (
    <div>
      <h1>{TITLE}</h1>
      <Form />
      <hr />
      {organization
        ? <Organization organization={organization} errors={errors}/>
        : <p>Loading data ...</p>
      }
    </div>
  );
};


export default App;
