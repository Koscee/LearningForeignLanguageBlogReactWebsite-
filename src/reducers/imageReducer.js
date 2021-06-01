import { UPLOAD_IMAGE } from '../actions/types';

const initialState = {
  imageUrl: ''
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        imageUrl: action.payload
      };

    default:
      return state;
  }
}
