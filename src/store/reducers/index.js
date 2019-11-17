import { combineReducers } from 'redux';

import messagesReducers from './messages';

const reducers = combineReducers({
  messagesReducers,
});

export default reducers;