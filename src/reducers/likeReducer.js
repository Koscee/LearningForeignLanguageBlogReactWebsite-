import { GET_LIKES } from 'src/actions/types';

const initialState = {
  likes: [],
  like: {},
  totalCount: 0
};

export default function likeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIKES:
      return {
        ...state,
        likes: action.payload,
        totalCount: action.payload.length
      };

    default:
      return state;
  }
}
