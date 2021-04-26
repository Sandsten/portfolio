import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { Admin, Credentials, AdminError } from '../../types/admin'

const URL =
	process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
const credentialsSetting = process.env.NODE_ENV === "development" ? "include" : "same-origin"

export const signIn = createAsyncThunk<Admin, Credentials, {rejectValue: AdminError}>
	('admin/signIn', async (credentials, thunkApi) => {
		const response = await fetch(`${URL}/sign-in`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: credentialsSetting,
			body: JSON.stringify(credentials) // Converts Object to string format
		})
		if(response.status !== 200){
			return thunkApi.rejectWithValue((await response.json()) as AdminError) 
		}
		return (await response.json()) as Admin;
	});

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
		builder.addCase(signIn.rejected, (state, action) => {
			console.log(action)
			if (action.payload) {
        state.error = action.payload.message
      }
			state.status = null
		})
	},
});

export default adminSlice.reducer;