export const dataHelper = (dataArray, splittedArray) => {
    let dataInState = dataArray
    let structuredData = []
    if (dataInState.length >= 15) {
      dataInState.splice(0, 1)
    }
    structuredData.push(splittedArray);
    dataInState.push(structuredData)
    return dataInState
}