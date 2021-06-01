/* eslint no-underscore-dangle: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
let newStore;

const actionSanitizer = (action) => (
  action.type === 'GET_POST' && action.post
    ? { ...action, post: '<<LONG_BLOB>>' } : action
);
const reduxDevtoolsSanitizers = {
  actionSanitizer,
  stateSanitizer: (state) => (state.post ? { ...state, post: '<<LONG_BLOB>>' } : state)
};

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
                              && window.__REDUX_DEVTOOLS_EXTENSION__(reduxDevtoolsSanitizers);

//  wrong way of creating a store, it always resets the store when your app page changes because it is always called at the <Provider></Provider>
// const store = () => {
//   console.log('Store.js');
//   if (window.navigator.userAgent.includes('Chrome')) {
//     return (
//       createStore(
//         rootReducer,
//         initialState,
//         compose(
//           applyMiddleware(...middleware),
//           window.__REDUX_DEVTOOLS_EXTENSION__
//           && window.__REDUX_DEVTOOLS_EXTENSION__()
//         )
//       ));
//   }
//   return (
//     createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))
//   );
// };

if (window.navigator.userAgent.includes('Chrome') && ReactReduxDevTools) {
  console.log('ChromeStore');
  newStore = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ReactReduxDevTools
    )
  );
} else {
  newStore = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

const store = newStore;

export default store;
