const githubReducer = (state = {}, action) => {
  switch(action.type) {
    case '':
      return {
        ...state,
      };
    default: return state
  };
};

export default githubReducer;
