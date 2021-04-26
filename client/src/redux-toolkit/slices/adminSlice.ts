import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Admin, Credentials, AdminError } from '../../types/admin'

const URL =
	process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

export const signIn = createAsyncThunk<Admin, Credentials, {rejectValue: AdminError}>(
	'admin/signIn',
	async (credentials, thunkApi) => {
		const { username, password } = credentials;
		// When using AXIOS with await we have to use a try/catch statement. Othwerwize we will get undefined if an error is returned
		try {
			const response = await axios.post(
				`${URL}/sign-in`,
				{
					username,
					password,
				},
				{ withCredentials: true } // This allow us to set a cookie
			);
			return response.data as Admin;
		} catch (error) {
			const { message } = error.response.data;
 			return thunkApi.rejectWithValue(({errorMessage: message}) as AdminError); // Make sure it's sent back as an AdminError
		}
	}
);

const initialState: Admin = {
	signedIn: null,
	status: null,
	error: null
}

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {},
	// Dispatched Async thunk actions will be caught here
	extraReducers: (builder) => {
		builder.addCase(signIn.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(signIn.fulfilled, (state, {payload}) => {
			state.signedIn = true;
			state.status = 'success';
		});
		builder.addCase(signIn.rejected, (state, {payload}) => {
			if (payload) state.error = payload.errorMessage;
			state.status = null
		})
	},
});

export default adminSlice.reducer;