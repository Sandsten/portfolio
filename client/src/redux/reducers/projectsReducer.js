const DEFAULT = {
  projects: null,
  fetched: false
};

// Array of projects. Use this to show individual projects as well as for now.
const reducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case "PROJECTS_FETCHED":
      return {
        ...state,
        projects: action.payload,
        fetched: true,
        error: null,
        updating: false
      };
    case "PROJECTS_FETCHED_FAILED":
      return {
        ...state,
        projects: null,
        error: action.payload
      };
    case "PROJECTS_UPDATING":
      return {
        ...state,
        updating: true
      };
    default:
      break;
  }
  return state;
};

export default reducer;
