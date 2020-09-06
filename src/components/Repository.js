import React from 'react';

import Issues from './Issues';

const Repository = ({ repository, onFetchMoreIssues, onStarRepository }) => {

  return (
    <div>
      <p>
        <strong>In Repository: </strong>
        <a href={repository.url} target='_blank' rel='noopener noreferrer'>
          {repository.name}
        </a>
      </p>
      <button
        type='button'
        onClick={() =>
          onStarRepository(repository.id, repository.viewerHasStarred)
        }
      >
        {repository.stargazers.totalCount} / 
        {repository.viewerHasStarred ? 'Unstar' : 'Star'}
      </button>
      <Issues issues={repository.issues} />
      <hr />
      <button onClick={onFetchMoreIssues}>More</button>
    </div>
  );
};


export default Repository;
