import axios from 'axios';

const URL = 'http://localhost:3001';

export const autoSignIn = () => dispatch => {
  axios
    .post(`${URL}/auto-signin`, {}, { withCredentials: true })
    .then(result => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    })
    .catch(e => {
      dispatch({ type: 'LOGIN_FAILED', payload: e });
    });
};
