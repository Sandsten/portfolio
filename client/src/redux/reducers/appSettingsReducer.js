const appDefaultState = {
  theme: 'DARK'
};

const reducer = (state = appDefaultState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
  }
  return state;
};

export default reducer;
