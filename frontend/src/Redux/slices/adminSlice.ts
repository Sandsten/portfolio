import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Admin, AdminPayload, Credentials, AdminError } from '../../Types/admin';

// Here we have to use localhost instead of service name since API calls are called from the outside of our docker containers
// they are called from the browser!
const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
const credentialsSetting = process.env.NODE_ENV === 'development' ? 'include' : 'same-origin';

export const signIn = createAsyncThunk<AdminPayload, Credentials, { rejectValue: AdminError }>(
	'admin/signIn',
	async (credentials, thunkApi) => {
		const response = await fetch(`${URL}/sign-in`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', // Set contentype that it is in JSON format
			},
			credentials: credentialsSetting,
			body: JSON.stringify(credentials), // Converts Object to string format
		});
		//console.log(response.status);
		//console.log(await response.body);
		if (response.status !== 200) {
			return thunkApi.rejectWithValue((await response.json()) as AdminError);
		}
		return (await response.json()) as AdminPayload;
	}
);

export const createAdminAccount = createAsyncThunk<
	AdminPayload,
	Credentials,
	{ rejectValue: AdminError }
>('admin/createAccount', async (credentials, thunkApi) => {
	//console.log(credentials);
	const response = await fetch(`${URL}/create-account`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json', // Set contentype that it is in JSON format
		},
		credentials: credentialsSetting,
		body: JSON.stringify(credentials), // Converts Object to string format
	});
	if (response.status !== 200) {
		return thunkApi.rejectWithValue((await response.json()) as AdminError);
	}
	return (await response.json()) as AdminPayload;
});

// AdminPayload is the type for our payload, make sure it's matching what our API is returning for ease of use
export const signOut = createAsyncThunk<AdminPayload, Credentials, { rejectValue: AdminError }>(
	'admin/signOut',
	async () => {
		const response = await fetch(`${URL}/sign-out`, {
			method: 'POST',
			credentials: credentialsSetting,
		});
		//console.log(await response.status);
		return (await response.json()) as AdminPayload;
	}
);

const initialState: Admin = {
	signedIn: null,
	status: null,
	error: null,
};

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {},
	// Dispatched Async thunk actions will be caught here
	extraReducers: (builder) => {
		builder.addCase(signIn.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(signIn.fulfilled, (state, {}) => {
			state.signedIn = true;
			state.status = 'success';
		});
		builder.addCase(signIn.rejected, (state, action) => {
			//console.log(action);
			if (action.payload) {
				state.error = action.payload.message;
			}
			state.status = null;
		});

		builder.addCase(signOut.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(signOut.fulfilled, (state, {}) => {
			//console.log(payload?.message);
			state.signedIn = null;
			state.status = 'success';
		});
		builder.addCase(signOut.rejected, (state) => {
			//console.log(action.payload?.message);
			state.status = null;
		});
	},
});

export default adminSlice.reducer;
