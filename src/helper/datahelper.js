export const dataHelper = (dataArray, rowDataArray) => {
  let dataInState = dataArray
  let structuredData = []
  if (dataInState.length >= 15) {
    dataInState.splice(0, 1)
  }
  structuredData.push(rowDataArray);
  dataInState.push(structuredData)
  return dataInState
}

export const handleAscData = (arr) => {
  arr.sort(function (a, b) {
    var valueA, valueB;
    valueA = parseFloat(a[0][1]);
    valueB = parseFloat(b[0][1]);
    if (valueA < valueB) {
      return -1;
    }
    else if (valueA > valueB) {
      return 1;
    }
    return 0;
  })
  return arr
}

export const handleDesData = (arr) => {
  arr.sort(function (a, b) {
    var valueA, valueB;
    valueA = parseFloat(a[0][1]);
    valueB = parseFloat(b[0][1]);
    if (valueA < valueB) {
      return 1;
    }
    else if (valueA > valueB) {
      return -1;
    }
    return 0;
  })
  return arr
}
