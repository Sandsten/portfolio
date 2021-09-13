import { configureStore } from '@reduxjs/toolkit';

import adminReducer from './slices/adminSlice';
import siteConfigSlice from './slices/siteConfigSlice';
import projectsSlice from './slices/projectsSlice';

export default configureStore({
	reducer: {
		admin: adminReducer,
		// config: siteConfigSlice,
		projects: projectsSlice,
	},
});
