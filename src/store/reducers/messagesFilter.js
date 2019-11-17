import { MessagesFilters } from '../../store/actions/messagesFilter';
import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

export default function messages(state = MessagesFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}