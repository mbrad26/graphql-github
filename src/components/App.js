import React, { useState, useEffect, useCallback } from 'react';

import './App.css'
import Form from './Form';
import Organization from './Organization';
import { getIssuesOfRepository } from '../api/api';
import {
  getIssuesOfRepositoryQuery,
 } from '../Queries/queries';

const TITLE = 'React GraphQL GitHub Client';

const App = () => {

  console.log('APP');

  const [organization, setOrganization] = useState();
  const [errors, setErrors] = useState();
  const [path, setPath] = useState('the-road-to-learn-react/the-road-to-learn-react');

  const loadingData = useCallback((path) => {
    getIssuesOfRepository(path).then(res => {
        console.log(res);
        setOrganization(res.data.data.organization);
        setErrors(res.data.errors);
      });
  }, []);

  useEffect(() => {
    loadingData(path)
  }, [path, loadingData]);

  return (
    <div>
      <h1>{TITLE}</h1>
      <Form path={path} setPath={setPath} loadingData={loadingData}/>
      <hr />
      {organization
        ? <Organization organization={organization} errors={errors}/>
        : <p>Loading data ...</p>
      }
    </div>
  );
};


export default App;
