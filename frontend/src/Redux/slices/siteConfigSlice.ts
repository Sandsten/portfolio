import { createSlice } from '@reduxjs/toolkit';

import { SiteConfig } from '../../Types/siteConfig';

const initialState: SiteConfig = {
	theme: 'DARK',
};

const siteConfigSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === 'LIGHT' ? 'DARK' : 'LIGHT';
		},
		setTheme: (state, { payload }) => {
			state.theme = payload.storedTheme;
		},
	},
});

export const { toggleTheme, setTheme } = siteConfigSlice.actions;

export default siteConfigSlice.reducer;
