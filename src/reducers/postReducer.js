import {
  GET_POST, GET_FILTERED_POSTS, DELETE_POST, GET_ALL_POSTS, GET_USER_POSTS, GET_RELATED_POSTS
} from '../actions/types';

const initialState = {
  posts: [],
  post: {},
  relatedPosts: [],
  totalCount: 0
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
        totalCount: state.posts.length
      };

    case GET_USER_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case GET_FILTERED_POSTS:
      return {
        ...state,
        posts: action.payload,
        totalCount: state.posts.length
      };

    case GET_RELATED_POSTS:
      return {
        ...state,
        relatedPosts: action.payload
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      };

    default:
      return state;
  }
}
