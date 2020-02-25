import { dataHelper } from "../../helper/datahelper";

const initialState = {
  dataBidsArray: [],
  dataAsksArray: [],
  isLoading: true
}

const GET_DATA_SUCCEDED_BIDS = 'GET_DATA_SUCCEDED_BIDS';
const GET_DATA_SUCCEDED_ASKS = 'GET_DATA_SUCCEDED_ASKS';
const GET_DATA_FAILURE = 'GET_DATA_FAILURE'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCEDED_BIDS:
      let structuredBidsData = []
      structuredBidsData = dataHelper(state.dataBidsArray, action.bidsData)
      return { ...state, dataBidsArray: [...structuredBidsData], isLoading: false }
      case GET_DATA_SUCCEDED_ASKS:
        let structuredAsksData = []
        structuredAsksData = dataHelper(state.dataBidsArray, action.asksData)
        return {...state, dataAsksArray: [...structuredAsksData], isLoading: false}
      case GET_DATA_FAILURE:
        return state
    default:
      return state;
  }
};

export default reducer;
