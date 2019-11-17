import { FETCH } from '../constants/ActionTypes';

const initialState = {
  dataReceived: false,
  messages: [],
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        dataReceived: true,
        messages: action.messages,
      };

    default:
      return state;
  }
}