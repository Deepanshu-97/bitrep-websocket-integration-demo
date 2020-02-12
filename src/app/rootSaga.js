import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';


function* rootSaga() {
  yield all(
    [ 
    ]
  );
}

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
}

export default sagaMiddleware;



