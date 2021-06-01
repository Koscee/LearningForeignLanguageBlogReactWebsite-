import { DELETE_CATEGORY, GET_CATEGORIES, GET_CATEGORY } from 'src/actions/types';

const initialState = {
  category: {},
  categories: [],
  totalCount: 0
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        totalCount: state.categories.length
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((category) => category.id !== action.payload)
      };

    default:
      return state;
  }
}
