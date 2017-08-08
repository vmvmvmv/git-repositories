import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import 'babel-polyfill';

import mainSaga from './main/saga'
import reducer from './main/reducer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(mainSaga)

export default store