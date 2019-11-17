import { combineReducers } from 'redux';

import messages from './messages';
import messagesFilter from './messagesFilter';

const reducers = combineReducers({
  messages,
  messagesFilter,
});

export default reducers;