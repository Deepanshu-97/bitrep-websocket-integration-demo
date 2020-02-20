import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './rootReducer';
import rootSaga from './rootSaga'

const saga = createSagaMiddleware()
const middlewares = [saga]
const store = createStore(
  reducer,
  applyMiddleware(...middlewares)
)

saga.run(rootSaga);
export default store