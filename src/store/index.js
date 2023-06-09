import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';
import { logChange } from '../helper/reduxLogger';

let logger;
if (__DEV__) {
  logger = store => next => action => {
    const prevData = store.getState();
    let result = next(action);
    logChange(action.type, action.payload, prevData, store.getState());
    return result;
  };
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];

if (__DEV__) {
  middlewares.unshift(logger);
}

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;

if (__DEV__) {
  console.disableYellowBox = true;
  console.warn = () => '';
}
