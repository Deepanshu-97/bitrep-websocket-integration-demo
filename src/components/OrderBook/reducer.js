const initialState = {
  dataArray: []
}

const GET_DATA_SUCCEDED = 'GET_DATA_SUCCEDED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCEDED:
      let dataInState = state.dataArray
      let structuredData = []
      if (dataInState.length >= 15) {
        dataInState.splice(0, 1)
      }
      let string = action.data.data.replace(/\s|\[|\]|-/g, '')
      let splittedArray = string.split(',')
      structuredData.push(splittedArray);
      dataInState.push(structuredData)
      return { ...state, dataArray: [...dataInState] }

    default:
      return state;
  }
};

export default reducer;
