import { combineReducers } from 'redux';

import tasks from './tasks';

const taskerApp = combineReducers({
  tasks
});

export default taskerApp;