import * as actions from './../../app/actions'
import { takeEvery, call, take, put } from 'redux-saga/effects';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { eventChannel } from 'redux-saga';


const msg = JSON.stringify({
  event: 'subscribe',
  channel: 'book',
  symbol: 'tBTCUSD',
  freq: 'F1'
})

const wsLink = 'wss://api-pub.bitfinex.com/ws/2'

const webSocketInit = () => {
  return eventChannel(emitter => {
    const client = new W3CWebSocket(wsLink)
    client.onopen = () => {
      client.send(msg)
    }
    client.onmessage = (response) => {
      let dataString = response.data.replace(/\s|\[|\]/g, '')
      let rowDataArray = dataString.split(',')
      if (response.data.length < 50 && parseInt(rowDataArray[2]) !== 0) {
        if (parseFloat(rowDataArray[3]) > 0) {
          return emitter(actions.getDataSuccededBids(rowDataArray))
        }
        else {
          rowDataArray.map((data, index) => rowDataArray[index] = rowDataArray[index].replace('-', ''))
          return emitter(actions.getDataSuccededAsks(rowDataArray))
        }
      }
      return emitter(actions.getDataFailure())    
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