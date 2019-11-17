import { FETCH, SAVE } from '../constants/ActionTypes';

const initialState = {
  dataReceived: false,
  messages: [],
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        dataReceived: true,
        // This test is required to retrieve new messages because API does not exist
        messages: state.messages.length > 0 ? state.messages : action.messages,
      };
    case SAVE:
      return {
        dataReceived: false,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
}