import { createStore, applyMiddleware } from 'redux'
import app from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import dataSaga from '../saga/saga';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}
