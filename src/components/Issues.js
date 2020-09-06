import React from 'react';

import ReactionsList from './ReactionsList';

const Issues = ({ issues }) =>
  <ul>
    {issues.edges.map(issue =>
      <li key={issue.node.id}>
        <a href={issue.node.url} target='_blank' rel='noopener noreferrer'>
          issue.node.title}
        </a>
        <ReactionsList reactions={issue.node.reactions} />
      </li>
    )}
  </ul>

export default Issues;
