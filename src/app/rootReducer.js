import { combineReducers } from 'redux';
import orderBookReducer from './../components/OrderBook/reducer'

const rootReducer = combineReducers({ orderBookState: orderBookReducer })

export default rootReducer
