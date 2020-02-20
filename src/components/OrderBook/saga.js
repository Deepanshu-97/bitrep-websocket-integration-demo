import * as actions from './../../app/actions'
import { takeEvery, call, take, put } from 'redux-saga/effects';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { eventChannel } from 'redux-saga';

const webSocketInit = () => {
  return eventChannel(emitter => {
    const client = new W3CWebSocket('wss://api-pub.bitfinex.com/ws/2')
    client.onopen = () => {
      client.send(JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        pair: 'tBTCUSD',
        prec: 'P0'
      }))
    }
    client.onmessage = (response) => {
      return emitter(actions.getDataSucceded(response))
    }
    return () => {
      console.log('Socket off')
    }
  })
}

export function* getDataFromWebsocket() {
  const channel = yield call(webSocketInit)
  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}

export const orderBookSaga = [
  takeEvery('GET_DATA', getDataFromWebsocket)
]