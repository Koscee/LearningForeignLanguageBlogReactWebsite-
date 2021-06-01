import { GET_ALERT } from '../actions/types';

const initialState = {
  message: '',
  type: '',
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALERT:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type
      };

    default:
      return state;
  }
}
