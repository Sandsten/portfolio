import axios from 'axios';

const URL =
	process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

export const autoSignIn = () => (dispatch) => {
	axios
		.post(`${URL}/auto-signin`, {}, { withCredentials: true })
		.then((result) => {
			//dispatch({ type: 'LOGIN_SUCCESS' });
		})
		.catch((e) => {
			//dispatch({ type: 'LOGIN_FAILED', payload: e });
		});
};

export const signIn = (username, password) => (dispatch) => {
	axios
		.post(
			`${URL}/sign-in`,
			{
				username,
				password,
			},
			{ withCredentials: true }
		)
		.then(() => {
			//dispatch({ type: 'LOGIN_SUCCESS' });
		});
};

export const testCookie = () => (dispatch) => {
	axios
		.post(`${URL}/valid-token`, {}, { withCredentials: true })
		.then((result) => console.log(result))
		.catch((e) => console.log(e));
};

export const createAccount = (username, password) => (dispatch) => {
	// Make a POST request to the server for creating an account
	axios.post(`${URL}/create-account`, {
		username,
		password,
	});
};

export const signOut = () => (dispatch) => {
	axios.post(`${URL}/sign-out`, {}, { withCredentials: true }).then(() => {
		//dispatch({ type: 'LOGOUT_SUCCESS' });
	});
};
