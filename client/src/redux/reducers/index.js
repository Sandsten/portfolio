import { combineReducers } from 'redux';

import user from './userReducer';
import appSettings from './appSettingsReducer';
import projects from './projectsReducer';

export default combineReducers({
  user,
  appSettings,
  projects
});
