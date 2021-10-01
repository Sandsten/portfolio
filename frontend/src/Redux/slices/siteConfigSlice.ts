import { createSlice } from '@reduxjs/toolkit';
import { SiteConfig } from '../../Types/siteConfig';
import { DARK_THEME, LIGHT_THEME } from '../../Constants/colors';

const initialState: SiteConfig = {
	theme: DARK_THEME,
};

const siteConfigSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme.NAME === 'dark' ? LIGHT_THEME : DARK_THEME;
		},
		setTheme: (state, { payload }) => {
			state.theme = payload;
		},
	},
});

export const { toggleTheme, setTheme } = siteConfigSlice.actions;

export default siteConfigSlice.reducer;
