import { dataHelper } from "../../helper/datahelper";

const initialState = {
  dataBidsArray: [],
  dataAsksArray: [],
  isLoading: true
}

const GET_DATA_SUCCEDED = 'GET_DATA_SUCCEDED';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCEDED:
      let structuredData = []
      let dataString = action.data.data.replace(/\s|\[|\]/g, '')
      let splittedArray = dataString.split(',')
      if (action.data.data.length < 30 && parseInt(splittedArray[2]) !== 0) {
        if (parseFloat(splittedArray[3]) > 0) {
          structuredData = dataHelper(state.dataBidsArray, splittedArray)
          return { ...state, dataBidsArray: [...structuredData], isLoading: false }
        }
        else {
          splittedArray.map((data, index) => splittedArray[index] = splittedArray[index].replace('-', ''))
          structuredData = dataHelper(state.dataAsksArray, splittedArray)
          return { ...state, dataAsksArray: [...structuredData], isLoading: false }
        }
      }
      return { ...state }
    default:
      return state;
  }
};

export default reducer;
