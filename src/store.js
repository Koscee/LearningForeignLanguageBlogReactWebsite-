/* eslint no-underscore-dangle: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = () => {
  if (window.navigator.userAgent.includes('Chrome')) {
    return (
      createStore(
        rootReducer,
        initialState,
        compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__
          && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      ));
  }
  return (
    createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))
  );
};

// if (window.navigator.userAgent.includes('Chrome')) {
//     store = createStore(
//       rootReducer,
//       initialState,
//       compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__
//       && window.__REDUX_DEVTOOLS_EXTENSION__()
//       )
//     );
//   } else {
//     store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
//   }

export default store;
