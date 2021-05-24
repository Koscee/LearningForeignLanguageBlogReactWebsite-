import { GET_POST, GET_POSTS } from '../actions/types';

const initialState = {
  posts: [],
  post: {},
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload
      };

    default:
      return state;
  }
}