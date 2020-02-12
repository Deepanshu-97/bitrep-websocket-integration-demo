import { createStore } from 'redux';
import reducer from './rootReducer';
import sagaMiddleware from './rootSaga';

const store = createStore({
  reducer,
  middleware: [sagaMiddleware]
});

export default store