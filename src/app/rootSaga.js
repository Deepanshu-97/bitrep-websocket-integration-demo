import { all } from 'redux-saga/effects';
import { orderBookSaga } from './../components/OrderBook/saga'


export default function* rootSaga() {
  yield all(
    [
      ...orderBookSaga
    ]
  )
}