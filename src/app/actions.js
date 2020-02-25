export const getData = () => ({
  type: 'GET_DATA'
})

export const getDataSuccededBids = (data) => ({
  type: 'GET_DATA_SUCCEDED_BIDS',
  bidsData: data
})

export const getDataSuccededAsks = (data) => ({
  type: 'GET_DATA_SUCCEDED_ASKS',
  asksData: data
})

export const getDataFailure = () => ({
  type: 'GET_DATA_FAILURE'
})