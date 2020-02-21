const initialState = {
  dataBidsArray: [],
  dataAsksArray: [],
  isLoading: true
}

const GET_DATA_SUCCEDED = 'GET_DATA_SUCCEDED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCEDED:
      let dataString = action.data.data.replace(/\s|\[|\]/g, '')
      let splittedArray = dataString.split(',')
      if (action.data.data.length < 30 && parseInt(splittedArray[2]) !== 0 && !splittedArray.includes(NaN)) {
        if (parseFloat(splittedArray[3]) > 0) {
          let dataInBidsState = state.dataBidsArray
          let structuredBidsData = []
          if (dataInBidsState.length >= 15) {
            dataInBidsState.splice(0, 1)
          }
          structuredBidsData.push(splittedArray);
          dataInBidsState.push(structuredBidsData)
          return { ...state, dataBidsArray: [...dataInBidsState], isLoading: false }
        }
        else {
          splittedArray.map((data, index) => splittedArray[index] = splittedArray[index].replace('-', ''))
          let dataInAsksState = state.dataAsksArray
          let structuredAsksData = []
          if (dataInAsksState.length >= 15) {
            dataInAsksState.splice(0, 1)
          }
          structuredAsksData.push(splittedArray);
          dataInAsksState.push(structuredAsksData)
          return { ...state, dataAsksArray: [...dataInAsksState], isLoading: false }
        }
      }
      return { ...state }
    default:
      return state;
  }
};

export default reducer;
