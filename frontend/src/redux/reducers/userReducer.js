const DEFAULT = {
  signedIn: null
};

const reducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, signedIn: true, error: null };
    case 'LOGIN_FAILED':
      return { ...state, signedIn: false, error: action.payload.message };
    case 'LOGOUT_SUCCESS':
      return { ...state, signedIn: false };
    default:
      break;
  }
  return state;
};

export default reducer;
