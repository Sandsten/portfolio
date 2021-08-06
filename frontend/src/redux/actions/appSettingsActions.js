export const setTheme = theme => {
  return {
    type: 'SET_THEME',
    payload: theme
  };
};

export const toggleTheme = theme => {
  return {
    type: 'TOGGLE_THEME'
  };
};
