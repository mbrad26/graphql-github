import React from 'react';

const Issues = ({ issues }) =>
  <ul>
    {issues.edges.map(issue =>
      <li key={issue.node.id}>
        <a href={issue.node.url} target='_blank' rel='noopener noreferrer'>
          issue.node.title}
        </a>
      </li>
    )}
  </ul>

export default Issues;
