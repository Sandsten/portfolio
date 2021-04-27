import { configureStore } from '@reduxjs/toolkit';

import adminReducer from './slices/adminSlice';
import themeReducer from './slices/themeSlice';

export default configureStore({
	reducer: {
		admin: adminReducer,
		theme: themeReducer,
	},
});
