import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import adminReducer from './slices/adminSlice';
import siteConfigSlice from './slices/siteConfigSlice';
import projectsSlice from './slices/projectsSlice';

const store = configureStore({
	reducer: {
		admin: adminReducer,
		config: siteConfigSlice,
		projects: projectsSlice,
	},
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;
