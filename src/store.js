import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

/* The store holds the complete state tree of our app. We compose redux devtools to
   be able to debug the application easier in chrome */

// If you have a developer tool for redux on your browser,remove the commented out code
// inside compose
const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      
    )
  );

export default store;
