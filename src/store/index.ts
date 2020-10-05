import { applyMiddleware, createStore, compose } from "redux";
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../store/reducers";
import rootSaga from "../store/sagas";



function configureStore(initialState = {}, history) {
  let composeEnhancers

  if (process.env.NODE_ENV !== "production") {
    composeEnhancers = composeWithDevTools
  } else {
    composeEnhancers = compose
  }

  const sagaMiddleware = createSagaMiddleware();


  const middlewares = [sagaMiddleware,  routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const store: any = createStore(
    rootReducer,
    initialState,

    composeEnhancers(...enhancers),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;