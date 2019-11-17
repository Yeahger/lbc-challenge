import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const MessagesFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PUBLIC: 'SHOW_PUBLIC',
  SHOW_PRIVATE: 'SHOW_PRIVATE',
};