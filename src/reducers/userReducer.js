import { DELETE_USER, GET_USER, GET_USERS } from 'src/actions/types';

const initialState = {
  users: [],
  user: {},
  totalCount: 0
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        totalCount: state.users.length
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      };

    default:
      return state;
  }
}
