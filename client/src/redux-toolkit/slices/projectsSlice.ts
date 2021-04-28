import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Projects, ProjectPayload, ProjectPayloadError } from '../../types/projects';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';
const credentialsSetting = process.env.NODE_ENV === 'development' ? 'include' : 'same-origin';

export const getProjects = createAsyncThunk<
	ProjectPayload,
	null,
	{ rejectValue: ProjectPayloadError }
>('projects/getProjects', async (obj, thunkApi) => {
	const response = await fetch(`${URL}/get-projects`, {
		method: 'GET',
		headers: {
			accept: 'application/json', // VERY IMPORTANT - set this to json in order to be able to recieve json data from the server. If not set it will return 404
		},
	});
	console.log(await response);
	// if (response.status !== 200) {
	// 	return thunkApi.rejectWithValue((await response.json()) as ProjectPayloadError);
	// }
	console.log(await response);
	return (await response.json()) as ProjectPayload;
});

const initialState: Projects = {
	data: [],
	status: null,
	error: null,
};

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {},
	// Dispatched Async thunk actions will be caught here
	extraReducers: (builder) => {
		builder.addCase(getProjects.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(getProjects.fulfilled, (state, { payload }) => {
			state.status = 'success';
			state.data = payload.projects;
		});
		builder.addCase(getProjects.rejected, (state, action) => {
			console.log(action);
			if (action.payload) {
				state.error = action.payload.message;
			}
			state.status = null;
		});
	},
});

export default projectsSlice.reducer;
