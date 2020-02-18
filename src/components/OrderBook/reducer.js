const initialState = {
  dataArray: []
}

const GET_DATA_SUCCEDED = 'GET_DATA_SUCCEDED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCEDED:
      let dataArray1 = state.dataArray
      let finalArray = []
      if (dataArray1.length >= 15) {
        dataArray1.splice(0, 1)
      }
      let string = action.data.data.replace(/\s|\[|\]|-/g, '')
      let splittedArray = string.split(',')
      finalArray.push(splittedArray);
      dataArray1.push(finalArray)
      return { ...state, dataArray: [...dataArray1] }

    default:
      return state;
  }
};

export default reducer;
