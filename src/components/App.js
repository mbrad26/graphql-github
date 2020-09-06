import React, { useState, useEffect, useCallback } from 'react';

import './App.css'
import Form from './Form';
import Organization from './Organization';
import {
  getIssuesOfRepository,
  addStarrToRepository,
 } from '../api/api';

const TITLE = 'React GraphQL GitHub Client';

const App = () => {

  console.log('APP');

  const [organization, setOrganization] = useState();
  const [errors, setErrors] = useState();
  const [path, setPath] = useState('the-road-to-learn-react/the-road-to-learn-react');
  const [star, setStar] = useState();

  const loadingData = useCallback((path, cursor) => {
    getIssuesOfRepository(path, cursor).then(res => {
        console.log(res);
        setOrganization(res.data.data.organization);
        setErrors(res.data.errors);
      });
  }, []);

  const onFetchMoreIssues = () => {
    const { endCursor } = organization.repository.issues.pageInfo;

    loadingData(path, endCursor);
  };

  const resolveAddStarMutation = mutationResult => {

  };

  const onStarRepository = (repositoryId, viewerHasStarred) => {
    addStarrToRepository(repositoryId).then(mutationResult =>
      setStar(mutationResult),
    );
  };

  useEffect(() => {
    loadingData(path)
  }, [path, loadingData]);

  return (
    <div>
      <h1>{TITLE}</h1>
      <Form path={path} setPath={setPath} loadingData={loadingData} />
      <hr />
      {organization
        ? <Organization
            organization={organization}
            errors={errors}
            onFetchMoreIssues={onFetchMoreIssues}
            onStarRepository={onStarRepository}
          />
        : <p>Loading data ...</p>
      }
    </div>
  );
};


export default App;
