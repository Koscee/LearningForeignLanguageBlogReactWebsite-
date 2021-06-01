import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import categoryReducer from './categoryReducer';
import commentReducer from './commentReducer';
import errorReducer from './errorReducer';
import likeReducer from './likeReducer';
import postReducer from './postReducer';
import roleReducer from './roleReducer';
// import imageReducer from './imageReducer';
import securityReducer from './securityReducer';
import userReducer from './userReducer';

export default combineReducers({
  errors: errorReducer,
  alert: alertReducer,
  post: postReducer,
  // image: imageReducer,
  security: securityReducer,
  user: userReducer,
  role: roleReducer,
  category: categoryReducer,
  comment: commentReducer,
  like: likeReducer
});
