import { createSlice } from '@reduxjs/toolkit';

import { Theme } from '../../types/theme';

const initialState: Theme = {
	version: 'DARK',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.version = state.version === 'LIGHT' ? 'DARK' : 'LIGHT';
		},
		setTheme: (state, { payload }) => {
			state.version = payload.storedTheme;
		},
	},
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
