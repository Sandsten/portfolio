const appDefaultState = {
  theme: null,
};

const reducer = (state = appDefaultState, action) => {
  switch (action.type) {
    case "SET_THEME":
      console.log(action.payload);
      return { ...state, theme: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "LIGHT" ? "DARK" : "LIGHT" };
    default:
  }
  return state;
};

export default reducer;
