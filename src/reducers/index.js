import { combineReducers } from 'redux';

import githubReducer from './githubData';

const rootReducer = combineReducers({
  githubState: githubReducer,
});

export default rootReducer;
