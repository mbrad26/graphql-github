import React from 'react';

const Repository = ({ repository }) =>
  <div>
    <p>
      <strong>In Repository: </strong>
      <a href={repository.url} target='_blank' rel='noopener noreferrer'>
        {repository.name}
      </a>
    </p>
  </div>

export default Repository;
