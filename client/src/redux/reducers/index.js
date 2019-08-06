import { combineReducers } from 'redux';

import appSettings from './appSettingsReducer';
import user from './userReducer';

export default combineReducers({
  user,
  appSettings
});
